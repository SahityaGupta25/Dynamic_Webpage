// TODO    IMPORT  _________________________________________________________________________________________________________________________________
const mongoose = require('mongoose');
// TODO  ___________________________________________________________________________________________________________________________________________


// &    Creating Database   ____________________________________________________________________________________________________________________________________
mongoose.connect('mongodb://localhost:27017/dynamicweb',{
// ? Deprecation Warnings
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successful");
}).catch((error)=>{
    console.log("Connection Failed");
})
// &  _____________________________________________________________________________________________________________________________________________
