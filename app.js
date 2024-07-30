const Mongoose=require("mongoose")
const Cors=require("cors")
const Bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const Express=require("express")

let app=Express()

app.get("/",(req,res)=>{
    res.send("Hai")
})

app.listen(3030,()=>{
    console.log("Server started")
})