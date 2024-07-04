import db from "../config/dbConfig.js";
import bcrypt from 'bcrypt';

const saltRounds = 10;
const plainPassword = 'User@123';

async function hashPassword(password) {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
    //   console.log('Hashed password:', hash);
      return hash;
    } catch (err) {
      console.error('Error hashing password:', err);
    }
  }

// const loginUser = (UserId, UserName, password) => {
//     const query_login = "INSERT INTO UserCredLogin (UserId, UserName, UserPassword) VALUES (?, ?, ?)";
//     const values = [UserId, UserName, password];
//     db.query(query_login, values, (err, res) => {
//         if(err){
//             console.log("There's an error")
//         }else{
//             console.log("User Login Created Successfully");
//         }
//     })
// }

const loginAdmin = (UserId, UserName, password) => {
    const query_login = "INSERT INTO AdminLogin (UserId, UserName, UserPassword) VALUES (?, ?, ?)";
    const values = [UserId, UserName, password];
    db.query(query_login, values, (err, res) => {
        if(err){
            console.log("There's an error")
        }else{
            console.log("User Login Created Successfully");
        }
    })
}




loginAdmin('ed4c5037-ae7c-4b4f-be2f-61a8443bdbd1', 'krishnapriya@kgkcas.com', await hashPassword('Admin@123'));

// const query = "SELECT UserId, UserName FROM UserDetails ";
// const result = db.query(query, (err, res) => {
//     if(err){
//         console.error(err);
//     }else{
//         res.forEach(async (user) => {
//             const userId = user.UserId;
//             const userName = user.UserName;
//             const password = await hashPassword(plainPassword);
//             loginUser(userId, userName, password);            
//         })
//     }
// })