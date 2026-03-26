const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    username: String,
    password: String   });

const User = mongoose.model("User", UserSchema);
    
    
const errorMsg = {}
const status = {}
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/api/server/status", (req, res)=>{
    status.msg = "Server is up and ready!";
    res.json(status);
});
app.post("/api/submit-form", async (req, res)=>{
    const body = req.body;
    console.log("Recieved form data:", body);
    const responseData = {
        statusCode:201,
        msg:"Cat Form submission successful!",
        data: body
    }
    res.status(201).json(responseData);
});
app.post("/api/submit-form/login", async (req, res)=> {
    //const responseBody = {status:200, msg:"Login successful!"}

    const {username, password} = req.body;

    const newUser = new User ({ username, password });
    await newUser.save();

res.status(200).json({
    status: 200,
    msg: "User saved successfully!",
    data: newUser
});
});
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});