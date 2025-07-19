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

const getAllCategory=async(req,res)=>{
      const allCategory=await categorySchema.find({})
      if(allCategory){
        return res.json({
            message:"success",
            data:allCategory
        })
      }
}
const singleCategory=async(req,res)=>{
     const {id}=req.params
     const exsitSingleCategory=await categorySchema.find({_id:id})
     if(exsitSingleCategory){
        return res.json({
            message:"sucess",
            data:exsitSingleCategory
        })
     }
}

module.exports={categoryController,getAllCategory,singleCategory}