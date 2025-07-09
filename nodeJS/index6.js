//
const mongoose=require('mongoose');
const express=require('express')
const app=express()
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const SECRET="somewords"
// connection to database
mongoose.connect("mongodb://localhost:27017/lpu").then(()=>{
  
    app.listen(3000,()=>{
    console.log("server started");
});
});

// app.get('/users',(req,res)=>{
//     res.json({});
// })

//models
const userSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    role:{type:String},
},{timestamps:true}
)


const userModel=mongoose.model("User",userSchema);

//middleware
app.use(express.json())

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing or invalid" });

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded; // save user details for next middleware
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};
const authorize = (role) => {
    return (req, res, next) => {
        if (req.user?.role === role) {
            next();
        } else {
            res.status(403).json({ message: "Forbidden: Access Denied" });
        }
    };
};

//registering

app.post("/register",async (req,res)=>{
 try{const {name,email,password,role}=req.body;
 const hashpwd=await bcrypt.hash(password,10);
 const user={
    name,email,password:hashpwd,role
 };
 const result= await userModel.create(user);
 res.status(200).json(result);
}catch(err){
    console.log(err);
    res.status(400).json({message:"Something went wrong"});
}
})
// to get users

app.get('/users',async(req,res)=>{
    const result=await userModel.find();
    res.status(200).json(result);
    console.log(result);
})

// login
app.use(express.json());

app.post('/login',async(req,res)=>{
try{
const {email,password}=req.body
const user=await userModel.findOne({email})

if(user){
   const isMatch=await bcrypt.compare(password,user.password);
   if(isMatch){
    const userObj={
        name:user.name,
        email:user.email,
        role:user.role
    };
    const token=jwt.sign(userObj,SECRET,{expiresIn:"1h"});
    res.status(200).json({user:userObj,token});
}else{
    res.status(400).json({message:"Invalid passowrd"});
}
}
}catch(err){
console.log(err)
res.status(400).json({message:"Something went wrong"})
}

});
app.get("/admin/users", authenticate, authorize("admin"), async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: "Something went wrong" });
    }
});



// router

const userRouter=express.Router()
app.use('/api',userRouter);











