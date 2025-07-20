const cloudinay = require("../handler/cloudinay");
const Product = require("../model/productSchema");

const productController =async (req, res) => {
    // console.log(req.file.path)
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
    const paths=req.file.path
     const result=await cloudinay(paths)
     console.log(result)
    const productData = new Product({
      name,
      description,
      price,
      image:result.secure_url,
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
