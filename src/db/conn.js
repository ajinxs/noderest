const mongoose = require("mongoose")

mongoose.connect("",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is Successful")
}).catch((e)=>{
    console.log("No Connection");
})


