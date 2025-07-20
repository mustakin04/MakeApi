const mongoose=require("mongoose")
const {Schema}=mongoose

const productSchema=new Schema({
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
     price:{
        type:String,
        trim:true
    },
    image:{
        type:String
    },
     color:{
        type:String,
        trim:true
    },
     Storage:{
        type:String,
        trim:true
    },
     ram:{
        type:String,
        trim:true
    },
     size:{
        type:String,
        trim:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    subCategory:{
        type:Schema.Types.ObjectId,
        ref:"SubCategory"
    }

})

module.exports=mongoose.model("Product",productSchema)