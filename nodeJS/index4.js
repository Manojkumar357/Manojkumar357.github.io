//


const express=require('express');
const app=express();


const port=process.argv[2] || "8080"

app.get('/',(req,res)=>{
    res.send(`<h1>Hello this from port ${port}</h1>`)
})
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})