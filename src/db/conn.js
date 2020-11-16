const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/schooldata",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is Successful")
}).catch((e)=>{
    console.log("No Connection");
})


