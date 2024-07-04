import { v4 as uuidv4 } from 'uuid';
import db from "../config/dbConfig.js";

const createTwoUser = async (data) => {
  try {
    const instiNname = data[0];
    const userId_1 = uuidv4();
    const dispName_1 = data[2];
    const userName_1 = data[3].toLowerCase().trim();
    const userMob_1 = data[4];
    const userstudying_1 = data[5];
    const userRole_1 = 'Leader';
    const userId_2 = uuidv4();
    const dispName_2 = data[7];
    const userName_2 = data[9].toLowerCase().trim();
    const userMob_2 = data[8];
    const userstudying_2 = data[10];
    const userRole_2 = 'Member';

    const query_1 = 'INSERT INTO UserDetails (UserId, UserName, DisplayName, Mobile, Studying, TeamRole, Institution) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values_1 = [userId_1, userName_1, dispName_1, userMob_1, userstudying_1, userRole_1, instiNname];

    await new Promise((resolve, reject) => {
      db.query(query_1, values_1, (err, res) => {
        if (err) {
          console.error('Error inserting user 1:', err);
          return reject('Not inserted user 1');
        } else {
          // console.log('User 1 inserted:', res);
          resolve();
        }
      });
    });

    const query_2 = 'INSERT INTO UserDetails (UserId, UserName, DisplayName, Mobile, Studying, TeamRole, Institution) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values_2 = [userId_2, userName_2, dispName_2, userMob_2, userstudying_2, userRole_2, instiNname];

    await new Promise((resolve, reject) => {
      db.query(query_2, values_2, (err, res) => {
        if (err) {
          console.error('Error inserting user 2:', err);
          return reject('Not inserted user 2');
        } else {
          // console.log('User 2 inserted:', res);
          resolve();
        }
      });
    });

    return "Successfully updated";
  } catch (error) {
    throw new Error(error);
  }
};

export default createTwoUser;
