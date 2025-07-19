const categorySchema = require("../model/categorySchema")

const categoryController=async(req,res)=>{
    const {name,description}=req.body
    const existingCategory=await categorySchema.find({name:name})
    if(existingCategory.length>0){
        return res.json("this category all ready exist")
    }
    const data=new categorySchema({
       name,
       description 
    })
    data.save()
    res.json({
        message:"category sucessfully upload database",
        data:data
    })
}


module.exports=categoryController