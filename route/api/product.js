const express = require("express");
const multer = require("multer");
const productController = require("../../controllers/productConroller");
const route = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix+`.${file.originalname.split(".")[1]}`);
  },

});
const upload = multer({ storage: storage })

route.post("/createProduct", upload.single("image"), productController);

module.exports = route;
