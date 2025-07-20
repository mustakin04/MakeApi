const express=require("express")
const route=express.Router()
const authRoute=require("./authentication")
const category=require("./category")
const subCategory=require("./subCategory")
const product =require("./product")
route.use("/authentication",authRoute)
route.use("/category",category)
route.use("/subCategory",subCategory)
route.use("/product",product)

module.exports=route