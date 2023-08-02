const development={
  name:'development',
  db:'mongodb://localhost/Polling_System_API',
  port:8000
}

const production={
    name:"production",
    db:process.env.pollingdb,
    port:process.env.port

}

module.exports=module.exports=eval(process.env.pollingdb)== undefined ? development :eval(process.env.pollingdb) ;