import db from "../config/dbConfig.js";
const query = "SELECT * FROM Teams";
db.query(query, (err, result) => {
    if(err){
        throw Error("Error Occured");
    }else{
        result.forEach((team) => {
            const teamId = team.TeamId;
            if(team.TeamMember_1){
                const member_1 = team.TeamMember_1;
                console.log(member_1);
                const query = "UPDATE UserDetails SET TeamId = ? WHERE UserId = ?";
                const values = [teamId, member_1];
                db.query(query, values, (err, result) => {
                    if(err){
                        throw Error("Error Occured");
                    }else{
                        console.log(`Member_1 Updated`);
                    }
                })
            }if(team.TeamMember_2){
                const member_2 = team.TeamMember_2;
                console.log(member_2)
                const query = "UPDATE UserDetails SET TeamId = ? WHERE UserId = ?";
                const values = [teamId, member_2];
                db.query(query, values, (err, result) => {
                    if(err){
                        throw Error("Error Occured");
                    }else{
                        console.log(`Member_2 Updated`);
                    }
                })
            }if(team.TeamMember_3){
                const member_3 = team.TeamMember_3;
                console.log(member_3);
                const query = "UPDATE UserDetails SET TeamId = ? WHERE UserId = ?";
                const values = [teamId, member_3];
                db.query(query, values, (err, result) => {
                    if(err){
                        throw Error("Error Occured");
                    }else{
                        console.log(`Member_3 Updated`);
                    }
                })
            }
        }) 
    }
})