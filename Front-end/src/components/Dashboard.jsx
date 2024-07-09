import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/dashboard.css'; // Import your new CSS file for styling
import avatar from "../assets/avatar.jpg";
import courseImage from "../assets/course.jpeg";





const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;



const UserDashboard = () => {
  const [details, setDetails] = useState({
    userName:"",
    coursePassed:false,
    teamPassed:false,
    leader:false,
    id:null,
    mobile:null,
    mail:null,
    institution:null,
    studying:null,
    courseGrade:null,
    AI: null,
    ML: null,
    RL: null,
    Deepracer:null,
    teamCount:0,
    teamName:null,
    teamId:null,
    teamMember1: null,
    teamMember1Mail:null,
    teamMember1LetterGrade: null,
    teamMember1CourseGrade: null,
    teamMember1Passed:null,
    teamMember1Leader: null,
    teamMember2: null,
    teamMember2Mail:null,
    teamMember2LetterGrade: null,
    teamMember2CourseGrade: null,
    teamMember2Passed:null,
    teamMember2Leader: null,
    teamMember3: null,
    teamMember3Mail:null,
    teamMember3LetterGrade: null,
    teamMember3CourseGrade: null,
    teamMember3Passed:null,
    teamMember3Leader: null
  })
  const navigate = useNavigate();
  const handleResetRoute = () => {
    navigate("/reset/password");
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/user-dashboard`, {
          method: 'GET',
          
          credentials: 'include', // This is important to send cookies with the request
        });

        if (!response.ok) {
          if (response.status === 400) {
            alert('User not found');
          } else {
            alert('Access denied');
          }
          navigate('/login');
        } else {
          const data = await response.json();

          setDetails((prevDetails) => ({
            ...prevDetails,
            userName: data.userName,
            coursePassed: data.coursePassed,
            teamPassed: data.teamPassed,
            leader: data.Leader,
            id: data.userId,
            mobile:data.userMobile,
            mail:data.userMail,
            studying:data.studying,
            courseGrade:data.courseGrade>0?data.courseGrade.substring(0, 4): 0,
            institution:data.institution,
            teamCount:data.teamCount,
            teamName:data.teamName,
            teamId:data.teamId,
            teamMember1:data.teamMember1,
            teamMember1Mail:data.teamMember1Mail,
            teamMember1Leader:data.teamMember1Leader,
            teamMember1Passed:data.teamMember1Passed,
            teamMember1LetterGrade:data.teamMember1LetterGrade,
            teamMember1CourseGrade:data.teamMember1CourseGrade>0?data.teamMember1CourseGrade.substring(0,4):0,
            teamMember2:data.teamMember2,
            teamMember2Mail:data.teamMember2Mail,
            teamMember2Leader:data.teamMember2Leader,
            teamMember2Passed:data.teamMember2Passed,
            teamMember2LetterGrade:data.teamMember2LetterGrade,
            teamMember2CourseGrade:data.teamMember2CourseGrade>0?data.teamMember2CourseGrade.substring(0,4):0,
            teamMember3:data.teamMember3,
            teamMember3Mail:data.teamMember3Mail,
            teamMember3Leader:data.teamMember3Leader,
            teamMember3Passed:data.teamMember3Passed,
            teamMember3LetterGrade:data.teamMember3LetterGrade,
            teamMember3CourseGrade:data.teamMember3CourseGrade>0?data.teamMember3CourseGrade.substring(0,4):0,
            AI:data.AI>0?data.AI.substring(0, 4):0,
            ML:data.ML>0?data.ML.substring(0, 4):0,
            RL:data.RL>0?data.RL.substring(0, 4):0,
            Deepracer:data.Deepracer>0?data.Deepracer.substring(0, 4):0

          }));
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        navigate('/login');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  return (
    <div className="user-dashboard-container">
      {/* Navigation */}
      <nav className="admin-nav">
        <ul>
          <li><Link to="/">Deepracer-3.0</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>

      {/* User Info */}
      <div className="user-info">
        <h1>Welcome, {details.userName}</h1>
        <div className="position-info">
          {details.leader ? <h2>Leader</h2> : <h2>Member</h2>}
          {details.leader ? <p>Leader is the one who leads from the front...</p> : <p>Members are key to marching towards victory...</p>}
        </div>
      </div>

      {/* Status Containers */}
      <div className="status-container">
        <div className="status-item">
          <h3>Courses</h3>
          <div className={`status-checkbox ${details.coursePassed ? 'passed' : 'not-passed'}`}>
            <input type="checkbox" id="coursePassed" checked={details.coursePassed} readOnly />
            <label htmlFor="coursePassed">{details.coursePassed ? 'Completed' : 'Incomplete'}</label>
          </div>
        </div>
        <div className="status-item">
          <h3>Team</h3>
          <div className={`status-checkbox ${details.teamPassed ? 'passed' : 'not-passed'}`}>
            <input type="checkbox" id="teamPassed" checked={details.teamPassed} readOnly />
            <label htmlFor="teamPassed">{details.teamPassed ? 'Passed' : 'Not Passed'}</label>
          </div>
        </div>
        <div className="status-item">
          <h3>AWS Credentials</h3>
          <div className={`status-checkbox ${details.teamPassed ? 'available' : 'not-available'}`}>
            <input type="checkbox" id="awsCredentials" checked={details.teamPassed} readOnly />
            <label htmlFor="awsCredentials">{details.teamPassed ? 'Available' : 'Not Available'}</label>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="user-profile-container">
        <h2 className="section-title">Profile</h2>
        <div className="profile-container">
          <div className="profile-card">
            <img src={avatar} alt="Profile Pic" className="profile-image" />
            <h3 className="profile-name">{details.userName}</h3>
            <p className="profile-id">{details.id}</p>
            <button onClick={handleResetRoute} className="G_btn">Reset Password</button>
          </div>
          <div className="profile-details">
            <h2 className="details-title">Name</h2>
            <h3 className="details-info">{details.userName}</h3>
            <h2 className="details-title">Mail</h2>
            <h3 className="details-info">{details.mail}</h3>
            <h2 className="details-title">Mobile</h2>
            <h3 className="details-info">{details.mobile}</h3>
            <h2 className="details-title">Studying</h2>
            <h3 className="details-info">{details.studying}</h3>
            <h2 className="details-title">Institution</h2>
            <h3 className="details-info">{details.institution}</h3>
          </div>
        </div>
      </div>

      {/* Team Details */}
        <div className="team-details-container user-profile-container">
          <div>
            <h2 className='section-title'>Team Details</h2>
            <div className="team-details-flex">
              <div className="team-details-item">
                <h3>Team Name</h3>
                <p style={{fontSize:"2rem"}}>{details.teamName}</p>
                <p>{details.teamId}</p>
              </div>
              <div className="team-details-item">
                <h3>Passed Status</h3>
                <p style={{fontSize:'2rem'}} className={`status ${details.teamPassed ? 'passed' : 'not-passed'}`}>
                  {details.teamPassed ? 'Passed' : 'Not Passed'}
                </p>
              </div>
              <div className="team-details-item">
                <h3>Total Members in Team</h3>
                <p style={{fontSize:"2rem"}}>{details.teamCount}</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Team Members</h2>
            <table className="team-members-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mail</th>
                  <th>Pass status</th>
                  <th>Letter Grade</th>
                  <th>Course Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details.teamMember1} {details.teamMember1Leader ? <span className="member-type">Leader</span> : <span className="member-type">Member</span>}</td>
                  <td>{details.teamMember1Mail}</td>
                  <td>{details.teamMember1Passed ? "Passed" : "Failed"}</td>
                  <td>{details.teamMember1LetterGrade ? details.teamMember1LetterGrade : "F"}</td>
                  <td>{details.teamMember1CourseGrade ? details.teamMember1CourseGrade : 0}</td>
                </tr>
                {details.teamCount > 1 &&
                  <tr>
                    <td>{details.teamMember2} {details.teamMember2Leader ? <span className="member-type">Leader</span> : <span className="member-type">Member</span>}</td>
                    <td>{details.teamMember2Mail}</td>
                    <td>{details.teamMember2Passed ? "Passed" : "Failed"}</td>
                    <td>{details.teamMember2LetterGrade ? details.teamMember2LetterGrade : "F"}</td>
                    <td>{details.teamMember2CourseGrade ? details.teamMember2CourseGrade : 0}</td>
                  </tr>
                }
                {details.teamCount === 3 &&
                  <tr>
                    <td>{details.teamMember3} {details.teamMember3Leader ? <span className="member-type">Leader</span> : <span className="member-type">Member</span>}</td>
                    <td>{details.teamMember3Mail}</td>
                    <td>{details.teamMember3Passed ? "Passed" : "Failed"}</td>
                    <td>{details.teamMember3LetterGrade ? details.teamMember3LetterGrade : "F"}</td>
                    <td>{details.teamMember3CourseGrade ? details.teamMember3CourseGrade : 0}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
        {/* Course Details */}
        <div className='user-profile-container'>
          <h2 className='section-title'>Course Status</h2>
          <div className="profile-container">
            <div className="course-card">
              <img src={courseImage} alt="course" className='course-image'/>
              <h3 className='course-name'>Deepracer Coursera Course</h3>
              <p className='profile-id'>Created by KGISL team</p>
            </div>
            <div className='profile-details'>
              <h2 className='details-title'>Artificial Intelligence Score: </h2>
              {details.AI ? <h3 className="details-info">{details.AI}</h3> : <h3 className="details-info">0</h3>}
              
              <h2 className='details-title'>Machine Learning Score:</h2>
              {details.ML ? <h3 className="details-info">{details.ML}</h3> : <h3 className="details-info">0</h3>}
              
              <h2 className='details-title'>Reinforcement Learning Score:</h2>
              {details.RL ? <h3 className="details-info">{details.RL}</h3> : <h3 className="details-info">0</h3>}
              
              <h2 className='details-title'>Deepracer Score:</h2>
              {details.Deepracer ? <h3 className="details-info">{details.Deepracer}</h3> : <h3 className="details-info">0</h3>}
              
              <h2 className='details-title'>Overall Score:</h2>
              {details.courseGrade ? <h3 className="details-info">{details.courseGrade}</h3> : <h3 className="details-info">0</h3>}
              
              <h2 className='details-title'>Passed: </h2>
              {details.coursePassed ? <h3 className="details-info">Passed ✅</h3> : <h3 className="details-info">Failed ❌</h3>}
            </div>
          </div>
        </div>
      </div>
  )};

export default UserDashboard;
