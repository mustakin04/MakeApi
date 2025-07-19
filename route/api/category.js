const express=require("express")
const {categoryController,getAllCategory,singleCategory} = require("../../controllers/categoryController")
const { get } = require("mongoose")
const route= express.Router()
route.post("/createCategory",categoryController)
route.get("/getAllCategory",getAllCategory)
route.get("/singleCategory/:id",singleCategory)
module.exports=route