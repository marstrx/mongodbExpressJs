const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port =5000;
require("dotenv").config();

mongoose.connect(process.env.mongdb);

const userSchema = new mongoose.Schema(
    {
        name:String,
        age:Number,
        email:String
    }
);
const userModel = mongoose.model("user",userSchema);
const user1 = new userModel({
    name:"Marouane",
    age:19,
    email:"email.com"
});

user1.save();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})