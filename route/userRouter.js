const express = require("express");
const User = require("../model/userModel");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    try {
        return res.status(200).send("How it works?");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});
 
userRouter.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});

 
userRouter.post("/users", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const ID = Math.floor(100000 + Math.random() * 900000);
        console.log("User ID:", ID);

        const newUser = new User({
            userId: ID,
            name,
            email,
            password
        });

        await newUser.save();
        return res.status(201).send("User created successfully");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});
 
userRouter.post("/users/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
        const deletedUser = await User.findOneAndDelete({ userId });
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        return res.status(200).json(deletedUser);
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});
 
userRouter.post("/users/:userId", async (req, res) => {
    const { userId } = req.params;
    const { email } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate(
            { userId },
            { email },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = userRouter;
