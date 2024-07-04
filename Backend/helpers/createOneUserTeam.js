import db from "../config/dbConfig.js";
import { v4 as uuidv4 } from 'uuid';

// Function to get member1_id with a promise
const member1_id = (UserName) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT UserId FROM UserDetails WHERE UserName = ?";
        const values = [UserName];
        db.query(query, values, (err, res) => {
            if (err) {
                reject(new Error("Found Error"));
            } else {
                if (res.length > 0) {
                    resolve(res[0].UserId); // Assuming UserId is the field you're interested in
                } else {
                    reject(new Error(`User Not Found for: ${UserName}`));
                }
            }
        });
    });
};

// Function to create one user team
const createOneUserTeam = async (team) => {
    try {
        const teamName = team[1];
        const teamId = uuidv4();
        const noMembers = team[6] + 1;
        const member1Id = await member1_id(team[3].toLowerCase().trim()); // Await the promise from member1_id

        const query_2 = "INSERT INTO Teams (TeamId, TeamName, TeamMember_1, NumOfMembers) VALUES (?, ?, ?, ?)";
        const values_2 = [teamId, teamName, member1Id, noMembers];

        await new Promise((resolve, reject) => {
            db.query(query_2, values_2, (err, res) => {
                if (err) {
                    reject(new Error("Not created team"));
                } else {
                    console.log("Team created");
                    resolve(res);
                }
            });
        });
    } catch (err) {
        console.error("Error creating team:", err);
    }
};

export default createOneUserTeam;