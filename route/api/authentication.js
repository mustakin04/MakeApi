const express=require("express")
const route=express.Router()
route.get("/registration",(req,res)=>{
    res.send("ami achi")
})

module.exports=route