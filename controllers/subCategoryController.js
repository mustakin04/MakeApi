const categorySchema = require("../model/categorySchema");
const subCategorySchema = require("../model/subCategorySchema");

const subCategory = async(req, res) => {
  const { name, description, category } = req.body;
  const categoryId=await categorySchema.find({name:category})
console.log(categoryId[0]._id)
  const subCategory = new subCategorySchema({
    name,
    description,
    category:categoryId[0]._id,
  })
  subCategory.save()
  res.json({
    message:"sucess",
    data:subCategory
  })
  const subCategoryId=await subCategorySchema.findOne({name:name})
  console.log(subCategory._id)
  const updateCategory= await categorySchema.updateOne({_id:categoryId[0]._id},
    {$set:{subCategory:subCategory._id}}
  )
};

module.exports = subCategory;
