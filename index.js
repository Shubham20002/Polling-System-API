const express=require('express');
const env=require('./config/env');
const port=env.port;
const app=express();

const db=require('./config/mongoose');



app.use(express.urlencoded({ extended: false }));
//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("error while startng express server");
    }
    console.log("server started on port no: "+port);
})