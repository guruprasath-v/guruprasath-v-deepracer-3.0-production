import db from "../config/dbConfig.js";

const userUpdate = (scores) => {
    // Create an array to store all promises for each update operation
    const promises = scores.map((score) => {
        const userName = score[0].toLowerCase();
        const week_1 = (score[1] === undefined || score[1] === null) ? 0 : score[1];
        const week_2 = (score[2] === undefined || score[2] === null) ? 0 : score[2];
        const week_3 = (score[3] === undefined || score[3] === null) ? 0 : score[3];
        const week_4 = (score[4] === undefined || score[4] === null) ? 0 : score[4];
        const letterGrade = score[5];
        const courseGrade = score[6];
        const passed = (score[7] === undefined || score[7] === null || score[7] === 0 || (typeof score[7] === "string" && score[7].toLowerCase() === "false")) ? 0 : score[7]; 
        const query = "UPDATE UserDetails SET Week_1Score = ?, Week_2Score = ?, Week_3Score = ?, Week_4Score = ?, LetterGrade = ?, CourseGrade = ?, CoursePassed = ? WHERE UserName = ?";
        const values = [week_1, week_2, week_3, week_4, letterGrade, courseGrade, passed, userName];

        // Return a promise for each db query operation
        return new Promise((resolve, reject) => {
            db.query(query, values, (err, res) => {
                if (err) {
                    reject(`Failed to Update User ${userName}`);
                } else {
                    resolve(`Updated User ${userName}`);
                }
            });
        });
    });

    // Return a promise that resolves when all db queries are complete
    return Promise.all(promises);
};

export default userUpdate;
