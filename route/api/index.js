const express=require("express")
const route=express.Router()
const authRoute=require("./authentication")
const category=require("./category")
route.use("/authentication",authRoute)
route.use("/category",category)

module.exports=route