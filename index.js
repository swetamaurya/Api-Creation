const express = require("express")
 const connection = require("./database/db");
 
const app = express()
const dotenv = require("dotenv");
const userRouter = require("./route/userRouter");
const cors = require('cors');
app.use(cors());
dotenv.config()

app.use(express.json());
 
app.use("/",userRouter)



app.listen(process.env.PORT,async(req,res)=>{
    try {
        await connection
        console.log("DB is connected")
    } catch (error) {
        console.log("Server error")
    }
    console.log(`${process.env.PORT} is running.`)
})