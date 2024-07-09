import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mysql2 from 'mysql2';
import db from './config/dbConfig.js';
import routes from "./route.js";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

const corsOptions = {
    origin: process.env.ORIGIN || 'http://localhost:3000', // Specify your React app's origin
    credentials: true, // This allows cookies to be sent with requests
};


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/', routes);




app.listen(process.env.PORT, () => {
    // console.log(`Server listening on port ${process.env.PORT}`);
});


