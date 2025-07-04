const express = require('express');
const app=express();
app.listen(8080,()=>{
    console.log("Server started");
})
app.use(express.static("public"));
app.get("/products",(req,res)=>{
    res.send("Product List");
})
