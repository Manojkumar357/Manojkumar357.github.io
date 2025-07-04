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
//middlewares
app.use(express.json());
const auth = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing or invalid" });
  }

  token = token.split(" ")[1];

  try {
    const user = jwt.verify(token, SECRET);
    req.role = user.role; // attach role to request
    next(); // move to the route
  } catch (err) {
    return res.status(403).json({ message: "Token verification failed" });
  }
};





app.post("/login",(req,res)=>{
  const {email,pass}=req.body;
  const found=users.find((user)=>user.email===email && user.pass===pass);
  if(found){
    const token=jwt.sign(found,SECRET,{expiresIn:"1h"} );
    res.status(200).json({user:found,token});
  }else{
    res.status(400).json({message:"Acess Denied"});
  }
})



app.listen(3000,()=>{
    console.log("server started at 3000");
})


app.get("/users",auth,(req,res)=>{
  res.json(users);
});