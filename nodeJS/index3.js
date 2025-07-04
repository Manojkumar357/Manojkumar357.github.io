//
const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
const SECRET="somewords";
const users=[
   { email:"john@gmail.com",
    pass:"1234",
    role:"user"
},
    { 
    email:"john@gmail.com",
    pass:"1234",
    role:"user"
},

]

app.use(express.json());

app.post("/login",(req,res)=>{
  const {email,pass}=req.body;
  const found=users.find((user)=>user.email===email && user.pass===pass);
  if(found){
    const token=jwt.sign(found,SECRET,{expiresIn:"1h"} );
    res.status(200).json({user:found},{token});
  }else{
    res.status(400).json({message:"Acess Denied"});
  }
})



app.listen(3000,()=>{
    console.log("server started at 3000");
})