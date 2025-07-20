const Product = require("../model/productSchema");

const productController = (req, res) => {
    console.log(req.file)
  try {
    const {
      name,
      description,
      price,
      image,
      color,
      storge,
      ram,
      size,
      category,
      subCategory,
    } = req.body;

    const productData = new Product({
      name,
      description,
      price,
      image:`http://localhost:3000/api/v1/upload/${req.file.filename}`,
      color,
      storge,
      ram,
      size,
      category,
      subCategory,
    });
    productData.save()
    res.json({
        message:"success",
        data:productData
    })
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

module.exports = productController;
