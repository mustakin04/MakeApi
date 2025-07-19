const express=require("express")
const subCategory = require("../../controllers/subCategoryController")
const route=express.Router()
route.post("/createSubCategory",subCategory)

module.exports=route