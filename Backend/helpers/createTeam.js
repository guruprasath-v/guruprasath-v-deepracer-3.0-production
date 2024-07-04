import {v4 as uuidv4} from 'uuid';
import db from "../config/dbConfig.js";
import createOneUserTeam from './createOneUserTeam.js';
import createTwoUserTeam from './createTwoUserTeam.js';
import createThreeUserTeam from './createThreeUserTeam.js';
import dotenv from 'dotenv';
dotenv.config();


const createTeam = async (teams) => {
    if(teams){
        for (const team of teams) {
            try {
              if (team[6] === 0) {
                await createOneUserTeam(team);
                // console.log('One user created for team:', team);
              } else if (team[6] === 1) {
                await createTwoUserTeam(team);
                // console.log('Two users created for team:', team);
              } else if (team[6] === 2) {
                await createThreeUserTeam(team);
                // console.log('Three users created for team:', team);
              }
            } catch (error) {
              console.error('Error creating users for team:', team, error);
            }
          }
    }
    
  };
  
  // Assuming createOneUser and createThreeUser functions are defined similarly with async/await
  
  export default createTeam;