const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port =5000;
require("dotenv").config();
app.use(express.json());
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

app.get("/",(req,res)=>{
    const users = userModel.find()
    .then((data)=>{
        res.json(data)
    })
})

app.post("/add", async (req, res) => {
    const newUser = new userModel({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    });

    await newUser.save();
    res.json({ message: "User added successfully", user: newUser });
});

user1.save();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})