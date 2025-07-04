//
const express = require('express');
const bcrypt = require('bcrypt');


const app=express();
async function server(){
const pwd="pass1234";
const hashpwd=await bcrypt.hash(pwd,10);
console.log(hashpwd);

app.listen(3000,()=>{
    console.log("Server started");
})

}
server()




