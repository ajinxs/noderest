const e = require("express");
const express = require("express")
const app = express()
const port = process.env.PORT || 5000

require("./db/conn");
const Student = require("./models/students");

//middleware
app.use(express.json());


//get student 
app.get("/student", async(req,res)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }catch(e){  
            res.send(e);
    }
})

//get students individual data
app.get("/student/:id", async(req,res)=>{
    try{
        const _id = req.params.id
        const studentDetail = await Student.findById(_id);
        res.send(studentDetail);

        if(!studentDetail){
            return res.status(404).send();
        }else{
            res.send(studentDetail)
        }
    }catch(e){
        res.status(500).send(e); 
    }
});

app.delete("/student/:id", async(req,res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deleteStudent){
            return res.status(400).send();
        }
    }catch(e){
        res.status(500).send(e);
    }
});

//creating student using asyn and await
app.post("/student", async (req,res)=>{

    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    }catch(e){ 
        res.status(400).send(e);
    }
});

app.delete("/student/:id", async(req,res)=>{

    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(404).send(e);
    }
});

app.patch('/student/:id', async(req,res)=>{

    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
        res.send(updateStudent);
    }catch(e){
        res.status(404).send(e);
    }
})

//Server listening to the request
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
