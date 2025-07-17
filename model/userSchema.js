const mongoose=require("mongoose")
const {Schema}=mongoose
const userSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    otp:String
})
module.exports=mongoose.model("UserList",userSchema)