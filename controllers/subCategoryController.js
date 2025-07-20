const Category = require("../model/categorySchema");
const SubCategory = require("../model/subCategorySchema");

const subCategory = async (req, res) => {
  const { name, description, category } = req.body;

  const categoryDoc = await Category.findOne({ name: category });
  if (!categoryDoc) {
    return res.status(404).json({ message: "Category not found" });
  }

  const newSubCategory = new SubCategory({
    name,
    description,
    category: categoryDoc._id,
  });

  await newSubCategory.save();

  // Optionally push subcategory to category's array
  await Category.updateOne(
    { _id: categoryDoc._id },
    { $push: { subCategory: newSubCategory._id } }
  );

  res.json({
    message: "SubCategory created successfully",
    data: newSubCategory,
  });
};

const deleteSubCategory = async (req, res) => {
  const { id } = req.params;

  const subCategoryDoc = await SubCategory.findById(id).populate("category");

  if (!subCategoryDoc) {
    return res.status(404).json({ message: "SubCategory not found" });
  }

  await Category.updateOne(
    { _id: subCategoryDoc.category._id },
    { $pull: { subCategory: subCategoryDoc._id } }
  );

  await SubCategory.deleteOne({ _id: id });

  res.json({
    message: "SubCategory deleted successfully",
    data: subCategoryDoc,
  });
};

module.exports = {
  subCategory,
  deleteSubCategory,
};
