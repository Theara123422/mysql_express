import express from 'express';
import { config } from 'dotenv';
import pool from './database/db_connect.js';
config();
const app  = express();
const port = process.env.port | 3000;
//initialize database connection
pool.getConnection((error,connection)=>{
    if(error) console.log("Failed to connect to database");
    console.log("Successfully connect to database");
    connection.release();
});






app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
})