const express=require("express")
const registrationController = require("../../controllers/registrationController")
const otpController = require("../../controllers/otpController")
const route=express.Router()
route.post("/registration",registrationController)
route.post("/otpController",otpController)

module.exports=route