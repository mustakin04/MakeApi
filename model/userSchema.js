const mongoose=require("mongoose")
const {Schema}=mongoose
const userSchema=new Schema({
    firstName:String,
    email:String,
    password:String,
    token:String
})
module.exports=mongoose.model("UserList",userSchema)