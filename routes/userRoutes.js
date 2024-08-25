import { Router } from "express";
import pool from "../database/db_connect.js";
const userRouter = Router();

userRouter.get('/getusers',(request,response) => {
    //1. get all users from database
    //2. response it to client
    //(query,value,callback)
    pool.query(`SELECT * FROM tbl_user WHERE 1`,(error,rows) => {
        if(error) return response.status(500).json({
            message : "Something went wrong"
        });
        response.status(200).json({
            message : "Get All User Success",
            data    : rows
        })
    })
})



export default userRouter;