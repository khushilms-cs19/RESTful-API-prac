const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("./db/connection");

app.use(express.json());

//models
const Student = require("./models/students");
//create a new students
//  

app.post("/students",async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.send(err);
    }
    // user.save().then(()=>{
    //     res.send(user);
    // }).catch((err)=>{
    //     res.send(err);
    // });
})

app.listen(port, ()=>{
    console.log("The connection is set up at port: ", port);
});