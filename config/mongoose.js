const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Polling_System_API');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log("successfully connected to db");
});

module.exports=db;