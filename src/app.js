const express = require("express")
const app = express()
const port = process.env.PORT || 5000

require("./db/conn");
const Student = require("./models/students");

//middleware
app.use(express.json());


//get student 
app.get("/", (req,res,next)=>{
    res.send("<h1>Welcome to GET Student Page</h1>");
})


/*creating student
app.post("/students", (req, res)=>{
    const user = new Student(req.body)

    //checking if the inserting data is ok or not
    user.save().then(()=>{
         res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})*/


//creating student using asyn and await
app.post("/students", async (req,res)=>{

    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    }catch(e){ 
        res.status(400).send(e);
    }
})

//Server listening to the request
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
