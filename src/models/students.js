const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
        minlength: 3    
    },
    email : {
        type: String,
        required : true,
        unique : [true, "Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type: Number,
        required : true,
        minlength : 10,
        unique : true
    },
    address : {
        type :  String,
        required : true,
    }
})

//Creating a collection from the model above
const Student = new mongoose.model("student", studentSchema);

//exporting the model 
module.exports = Student;