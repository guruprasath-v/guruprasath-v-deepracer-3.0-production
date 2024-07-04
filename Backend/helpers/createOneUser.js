import {v4 as uuidv4} from 'uuid';
import db from "../config/dbConfig.js";

const createOneUser = async (data) => {
    try{
        const instiName = data[0];
        const userId_1 = uuidv4();
        const dispName_1 = data[2];
        const userName_1 = data[3].toLowerCase().trim();
        const userMob_1 = data[4];
        const userstudying_1 = data[5];
        const userRole_1 = 'Leader';

        const query = 'INSERT INTO UserDetails (UserId, UserName, DisplayName, Mobile, Studying, TeamRole, Institution) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [userId_1, userName_1, dispName_1, userMob_1, userstudying_1, userRole_1, instiName];

        await new Promise((resolve, reject) => {
            db.query(query, values, (err, res) => {
                if(err){
                    console.error('Error inserting user:', err);
                    return reject ('Not inserted');
                }else{
                    // console.log(res);
                    return resolve("SuccessFully upadted 1");
                }
            })

        })

    }catch(err){
        throw new Error(err);
    }
}


export default createOneUser;