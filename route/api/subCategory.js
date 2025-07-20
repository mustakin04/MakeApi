const express=require("express")
const {subCategory,deleteSubCategory}= require("../../controllers/subCategoryController")
const route=express.Router()
route.post("/createSubCategory",subCategory)
route.delete("/deleteSubCategory/:id",deleteSubCategory)

module.exports=route