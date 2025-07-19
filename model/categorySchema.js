const mongoose=require("mongoose")
const {Schema}=mongoose
const categorySchema=new Schema({
      name:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      },
      subCategory:[{
        type:Schema.Types.ObjectId,
        ref:"subCategory",

      }]

})

module.exports=mongoose.model("Category",categorySchema)