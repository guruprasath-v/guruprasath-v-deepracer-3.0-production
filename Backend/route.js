import express from 'express';
import upload from './config/multerConfig.js';
const router = express.Router();
import extractuserdetails from './helpers/extractuserdetails.js';
import { verifyToken, verifyTokenUser } from "./middlewares/auth.js";
import jwt from 'jsonwebtoken';
import db from './config/dbConfig.js';
import bcrypt from 'bcrypt';

const ADMIN_SECRET_KEY = "AdminSecretKey";
const USER_SECRET_KEY = "UserSecretKey";

// Utility function to query database
const queryDB = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};







router.post("/admin/upload", verifyToken, upload.single('file'), extractuserdetails, (req, res) => {

  if (req.file) {
      res.send("File Uploaded successfully!");

  } else {
      res.send("File Not present");

  }
});


router.post("/admin/login", (req, res) => {
  console.log("request made from admin - login");
  const query = "SELECT * FROM AdminLogin WHERE UserName = ?";
  db.query(query, req.body.username.trim() , async (err, data) => {
    if(err){
      console.log(err);
      return res.json("Error");
    }
    if(data.length === 0){
      return res.json("No User Found");
    }

    const { UserName, UserId, UserPassword } = data[0];
    const passwordMatch = await bcrypt.compare(req.body.password, UserPassword);
    if (!passwordMatch) {
      console.log("passowrd wrong")
      return res.json("Password Incorrect");
    }

    const token = jwt.sign({ UserId: data[0].UserId, role: 'admin' }, ADMIN_SECRET_KEY, { expiresIn: '3d' });
    res.cookie('jwt', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', 
      maxAge: 60 * 60 * 24 * 3 * 1000
    });
    res.json({ token });
  });
});

router.get("/admin-dashboard", verifyToken, (req, res) => {
  console.log(req.user.UserId);
  
  const query1 = "SELECT DispName FROM Admins WHERE UserId = ?";
  const values1 = [req.user.UserId];
  
  const query2 = "SELECT DisplayName, UserName, CourseGrade, LetterGrade FROM UserDetails WHERE CourseGrade BETWEEN ? AND ? ORDER BY CourseGrade DESC LIMIT ?";
  const values2 = [0.6, 1, 20];

  db.query(query1, values1, (err1, result1) => {
    if (err1) {
      return res.status(500).json({ error: "Error fetching admin data" });
    } else {
      const dispName = result1[0].DispName;

      db.query(query2, values2, (err2, result2) => {
        if (err2) {
          return res.status(500).json({ error: "Error fetching user details" });
        } else {
          res.status(200).json({
            dispName: dispName,
            userDetails: result2
          });
        }
      });
    }
  });
});
  


router.get("/user-dashboard", verifyTokenUser, async (req, res) => {
  try {
    const userId = req.user.UserId;

    // Query to get user details
    const userResult = await queryDB("SELECT * FROM UserDetails WHERE UserId = ?", [userId]);

    if (userResult.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = userResult[0];
    const response = {
      userName: user.DisplayName,
      userMail: user.UserName,
      userMobile: user.Mobile,
      institution: user.Institution,
      studying: user.Studying,
      coursePassed: user.CoursePassed > 0 ? user.CoursePassed : 0,
      letterGrade: user.CoursePassed > 0 ? user.letterGrade : "F",
      courseGrade: user.CourseGrade > 0 ? user.CourseGrade : 0,
      teamPassed: false,
      Leader: user.TeamRole === 'Leader',
      AI: user.Week_1Score > 0 ? user.Week_1Score : 0,
      ML: user.Week_2Score > 0 ? user.Week_2Score : 0,
      RL: user.Week_3Score > 0 ? user.Week_3Score : 0,
      Deepracer: user.Week_4Score > 0 ? user.Week_4Score : 0,
      teamMember1: null,
      teamMember1Mail: null,
      teamMember1LetterGrade: null,
      teamMember1CourseGrade: null,
      teamMember1Passed: null,
      teamMember1Leader: null,
      teamMember2: null,
      teamMember2Mail: null,
      teamMember2LetterGrade: null,
      teamMember2CourseGrade: null,
      teamMember2Passed: null,
      teamMember2Leader: null,
      teamMember3: null,
      teamMember3Mail: null,
      teamMember3LetterGrade: null,
      teamMember3CourseGrade: null,
      teamMember3Passed: null,
      teamMember3Leader: null,
      teamName: null,
      userId: user.UserId,
      teamId: user.TeamId,
      teamCount: 0,
    };

    if (!user.TeamId) {
      return res.status(200).json(response);
    }

    // Query to get team members
    const teamResult = await queryDB("SELECT TeamMember_1, TeamMember_2, TeamMember_3, TeamName FROM Teams WHERE TeamId = ?", [user.TeamId]);

    if (teamResult.length === 0) {
      return res.status(400).json({ error: 'Team not found' });
    }

    const team = teamResult[0];

    response.teamName = team.TeamName;
    const teamMembers = [team.TeamMember_1, team.TeamMember_2, team.TeamMember_3].filter(Boolean);

    response.teamCount = teamMembers.length;

    // Function to set team member details
    const setTeamMemberDetails = async (index, userId) => {
      const teamMemberResult = await queryDB("SELECT * FROM UserDetails WHERE UserId = ?", [userId]);
      // console.log(teamMemberResult);
      if (teamMemberResult.length > 0) {
        const member = teamMemberResult[0];

        response[`teamMember${index}`] = member.DisplayName;
        response[`teamMember${index}Mail`] = member.UserName;
        response[`teamMember${index}LetterGrade`] = member.LetterGrade;
        response[`teamMember${index}CourseGrade`] = member.CourseGrade;
        response[`teamMember${index}Passed`] = member.CoursePassed;
        response[`teamMember${index}Leader`] = member.TeamRole === 'Leader';
      }
    };

    for (let i = 0; i < teamMembers.length; i++) {
      await setTeamMemberDetails(i + 1, teamMembers[i]);
    }

    // Query to check if all team members passed
    const placeholders = teamMembers.map(() => '?').join(',');
    const teamMembersResult = await queryDB(`SELECT UserId, CoursePassed FROM UserDetails WHERE UserId IN (${placeholders})`, teamMembers);

    const allTeamMembersPassed = teamMembersResult.every((member) =>{

      return member.CoursePassed === "1";
    });

    response.teamPassed = allTeamMembersPassed;

    return res.status(200).json(response);

  } catch (err) {

    return res.status(500).json({ error: 'Database error' });
  }
});



router.post("/user/login", (req, res) => {
  const query = "SELECT * FROM UserCredLogin WHERE UserName = ?";
  db.query(query, req.body.username.trim() , async (err, data) => {
    if(err){
      console.log(err);
      return res.json("Error");
    }
    if(data.length === 0){
      console.log("No user found")
      return res.json("No User Found");
    }

    const { UserName, UserId, UserPassword } = data[0];
    const passwordMatch = await bcrypt.compare(req.body.password, UserPassword);
    if (!passwordMatch) {
      console.log("Incorrect password");
      return res.json("Password Incorrect");
    }

    const token = jwt.sign({ UserId: UserId, role: 'user' }, USER_SECRET_KEY, { expiresIn: '1h' });
    res.cookie('jwt', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', 
      maxAge: 60 * 60 * 24 * 3 * 1000
    });
    res.json({ token });
  });

});

router.get("/logout", (req, res) => {
  if (req.cookies.jwt) {
      // Perform any necessary token verification here

      // Clear the JWT cookie
      res.clearCookie("jwt", {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
        path: '/'
    });
      res.status(200).json("Logged out successfully");
  } else {
      res.status(400).json("Already logged out"); // Or appropriate status code
  }
});

router.post("/user/reset-password", verifyTokenUser, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.UserId; // Extract userId from verified token payload

  try {
    // Fetch user from database using userId
    const userQuery = "SELECT * FROM UserCredLogin WHERE UserId = ?";
    db.query(userQuery, [userId], async (err, userRows) => {
      if (err) {
        console.error('Error fetching user:', err);
        return res.status(500).json({ message: "Server error" });
      }

      if (userRows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const user = userRows[0];

      // Verify current password
      const isMatch = await bcrypt.compare(currentPassword, user.UserPassword);

      if (!isMatch) {
        return res.status(400).json({ message: "Current password is incorrect" });
      }

      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Update user's password in database
      const updateQuery = "UPDATE UserCredLogin SET UserPassword = ? WHERE UserId = ?";
      db.query(updateQuery, [hashedPassword, userId], (err, result) => {
        if (err) {
          console.error('Error updating password:', err);
          return res.status(500).json({ message: "Server error" });
        }
        
        res.status(200).json({ message: "Password reset successful" });
      });
    });

  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: "Server error" });
  }
});


  
 

export default router;