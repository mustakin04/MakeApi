const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({ 
  cloud_name: 'dxxds8b8u', 
  api_key: '449683611257819', 
  api_secret: 't_m0TDvDoWIUL-ZiHXfk3nXzuCg'
});

const cloudinay = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path, {
      folder: "products", // optional folder in Cloudinary
      // remove public_id: 'shoes' to prevent overwriting
    });

    fs.unlinkSync(path); // ✅ delete temp file
    return result;       // ✅ return result to use later
  } catch (error) {
    console.log("Cloudinary upload failed:", error);
    throw error;
  }
};

module.exports = cloudinay;
