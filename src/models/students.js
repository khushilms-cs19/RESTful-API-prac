const mongoose = require("mongoose");
const validator = require("validator").default;

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: true,
        unique: [true, "Phone number already exists"],
    }, 
    address: {
        type: String,
        required: true,
    }
});

//creating a new collection
const Students = new mongoose.model("Student", studentSchema);
module.exports = Students;