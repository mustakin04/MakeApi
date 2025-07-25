const mongoose=require("mongoose")
const {Schema}=mongoose
const userSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    otp:String,
    otpExpiry:{
         type:Date,
         default:Date.now
    },

    isVerified:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"user",
        enum:["admin","user"]


    }
})
module.exports=mongoose.model("UserList",userSchema)