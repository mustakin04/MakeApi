const Category = require("../model/categorySchema");

const categoryController = async (req, res) => {
  const { name, description } = req.body;

  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    return res.json("This category already exists");
  }

  const newCategory = new Category({ name, description });
  await newCategory.save();

  res.json({
    message: "Category successfully uploaded to the database",
    data: newCategory,
  });
};

const getAllCategory = async (req, res) => {
  const allCategory = await Category.find({}).populate("subCategory");
  res.json({
    message: "Success",
    data: allCategory,
  });
};

const singleCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id).populate("subCategory");

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json({
    message: "Success",
    data: category,
  });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  const deletedCategory = await Category.findByIdAndDelete(id);
  res.json({
    message: "Deleted successfully",
    data: deletedCategory,
  });
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  const updatedCategory = await Category.findByIdAndUpdate(
    id,
    { description },
    { new: true }
  );

  res.json({
    message: "Updated successfully",
    data: updatedCategory,
  });
};

module.exports = {
  categoryController,
  getAllCategory,
  singleCategory,
  deleteCategory,
  updateCategory,
};
