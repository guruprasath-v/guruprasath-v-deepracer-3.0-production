import xlsx from 'xlsx';
import fs from 'fs';
// import createUsersForTeams from "./createUsers.js";
import createTeam from './createTeam.js';
import userUpdate from './userUpdate.js';

const extractuserdetails = async (req, res, next) => {
    if (req.file) {
        const filePath = req.file.path;
        try {
            const workbook = xlsx.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Indices of columns B, C, E, G, H (zero-based index)
            const columnsToExtract = [2, 3, 11, 19, 27, 35, 36, 37];
            const extractedData = [];

            // Iterate through each row
            xlsx.utils.sheet_to_json(worksheet, { header: 1 }).forEach(row => {
                const rowData = columnsToExtract.map(index => row[index]);

                // Filter out rows where all extracted columns are undefined, null, or empty strings
                if (rowData.some(cell => cell !== undefined && cell !== null && cell !== '')) {
                    extractedData.push(rowData);
                }
            });

            // console.log(extractedData);
            // console.log(extractedData.length);
            await userUpdate(extractedData);
            // console.log("UserUpdated")

            // Delete the file after processing
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error("Error deleting file:", err);
                } else {
                    // console.log("File deleted successfully");
                    res.json("Data Updated Successfully !");
                }
            });

            // Call the function to create users
            
            // await createTeam(extractedData)
            // .then(() => {
            //     console.log("Users created successfully");
            //     res.status(200).send('Users created successfully');
            // })
            // .catch(err => {
            //     console.error("Error creating users:", err);
            //     res.status(500).send('Error creating users');
            // });

            
            
            

        } catch (err) {
            console.error("Error reading file:", err);
            res.status(500).json('Error reading file');
        }
    } else {
        res.status(400).json('No file uploaded');
    }
}

export default extractuserdetails;
