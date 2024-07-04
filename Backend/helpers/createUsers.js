import {v4 as uuidv4} from 'uuid';
import db from "../config/dbConfig.js";
import createOneUser from './createOneUser.js';
import createTwoUser from './createTwoUser.js';
import createThreeUser from './createThreeUser.js';
import dotenv from 'dotenv';
dotenv.config();


const createUsersForTeams = async (teams) => {
    if(teams){
        for (const team of teams) {
            try {
              if (team[6] === 0) {
                await createOneUser(team);
                // console.log('One user created for team:', team);
              } else if (team[6] === 1) {
                await createTwoUser(team);
                // console.log('Two users created for team:', team);
              } else if (team[6] === 2) {
                await createThreeUser(team);
                // console.log('Three users created for team:', team);
              }
            } catch (error) {
              console.error('Error creating users for team:', team, error);
            }
          }
    }
    
  };
  
  // Assuming createOneUser and createThreeUser functions are defined similarly with async/await
  
  export default createUsersForTeams;