const mongoose=require("mongoose")
const {Schema}=mongoose
const subCategorySchma=new Schema({
     name:{
        type:String,
        required:true,
        trim:true
     },
     description:{
        type:String,
        required:true,
        trim:true
     },
     category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true
     }
})

module.exports=mongoose.model("SubCategory",subCategorySchma)