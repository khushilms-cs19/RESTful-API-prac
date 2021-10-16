const express = require("express");
const router = express.Router();
const Student = require("../models/students");


router.post("/students",async(req,res)=>{
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
});
router.get("/students", async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){
        res.send(err);
    }
});
router.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(err){
        res.send(err);
    }
});

//update the students by id

router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updatedStudent = await Student.findByIdAndUpdate(_id,req.body, {
            new: true,
        });
        res.send(updatedStudent);
    }catch(err){
        res.status(400).send(err);
    }
})


//delete the student entry

router.delete("/students/:id", async(req,res)=>{
    try{
        if(!req.params.id){
            res.status(400).send();
        }
        const _id = req.params.id;
        const deletedStudent = await Student.findByIdAndDelete(_id);
        if(!deletedStudent){
            res.status(404).send({
                message: "no data found.",
            })
        }
        res.send(deletedStudent);
    }catch(err){
        res.status(400).send();
    }
});

module.exports = router;