const express=require("express")
const registrationController = require("../../controllers/registrationController")
const {otpController,resendOtp} = require("../../controllers/otpController")
const loginController = require("../../controllers/loginController")
const route=express.Router()
route.post("/registration",registrationController)
route.post("/otpController",otpController)
route.post("/resendOtp",resendOtp)
route.post("/loginController",loginController)

module.exports=route