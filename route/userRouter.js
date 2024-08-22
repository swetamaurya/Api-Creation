const express = require("express")
const User = require("../model/userModel")
const userRouter = express.Router()



userRouter.get("/",(req,res)=>{
    try {
        return res.status(200).send("How it work?")
    } catch (error) {
        return res.status(400).send("error")
    }
})



// show data use of get
userRouter.get("/getUser",async (req,res)=>{
    try {
        let getAllUser = await User.find()
        return res.status(200).send(getAllUser)
    } catch (error) {
        return res.status(400).send(`Internal error`)
    }
})


// use of post save a data on server
userRouter.post("/postUser",async (req,res)=>{
    let payload = req.body
    try {
        // create usre id code
        const ID = Math.floor(100000 + Math.random() * 900000);
        console.log("user id", ID)

        const saveData = new User({
            userId:ID,
            name:payload.name,
            email:payload.email,
            password:payload.password
        })

        await saveData.save()
        return res.status(200).send("User created successfully")
    
    } catch (error) {
        return res.status(400).send(`Internal error`)
    }
})


//delete
userRouter.post("/deleteUser",async (req,res)=>{
    try {
        let payload = req.body
        let userId = req.body.userId
        console.log("user id",userId)

        let deleteUser = await User.findOneAndDelete({userId:payload.userId})
        console.log("delete user",deleteUser)
        return res.status(200).send(deleteUser)

    } catch (error) {
        return res.status(400).send(`Internal error`)
    }
   
})


// update  
userRouter.post("/updateUser", async (req,res)=>{
    let payload = req.body
    let {userId ,email} = req.body
    console.log("req.body data", payload)

    try {
        let updateUser = await User.findOneAndUpdate({userId:userId},{email:email})
        console.log("update user",updateUser)
        return res.status(200).send(updateUser)
    } catch (error) {
        return res.status(400).send(`Internal error`)
    }
})


module.exports = userRouter
