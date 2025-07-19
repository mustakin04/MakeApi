const express=require("express")
const categoryController = require("../../controllers/categoryController")
const route= express.Router()
route.post("/createCategory",categoryController)

module.exports=route