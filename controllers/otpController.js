const emailverification = require("../handler/emailverification");
const userSchema = require("../model/userSchema");
const crypto = require("crypto");
const otpController = async (req, res) => {
  const { email, otp } = req.body;
  if (!email) {
    return res.json("email is not require ");
  }
  if (!otp) {
    return res.json("otp is not require");
  }
  const user = await userSchema.findOne({ email: email });
  // console.log(user, "user");

  if (!user) {
    return res.json("User not found");
  }
  if (user.isVerified) {
    return res.json("User is verfied");
  }
  if (user.otp !== otp) {
    return res.json("invalid otp or rong otp");
  }
  const now=new Date()
  if(user.otpExpiry&& now > user.otpExpiry){
    return res.json("otp is expired")
  }
  const updateUser = await userSchema.updateOne(
    { email: email },
    { $set: { isVerified: true }, $unset: { otpExpiry: "", otp: "" } },

    { new: true }
  );
  res.json({
    message: "User verified successfully",
    result: updateUser,
  });
};

const resendOtp=async(req,res)=>{
      const{email}=req.body

    if (!email) {
    return res.json("email is not require ");
  }
  
  const user = await userSchema.findOne({ email: email });
  // console.log(user, "user");

  if (!user) {
    return res.json("User not found");
  }
  if (user.isVerified) {
    return res.json("User is verfied");
  }
  const otp=crypto.randomInt(1000000,9000000)
   emailverification(email,otp)
  const otpExpiry= new Date(Date.now()+10*60*1000)
   const existingUser= await userSchema.updateOne({email:email},
    {$set:{otp:otp,otpExpiry:otpExpiry},}
   )
   console.log(existingUser,"61")
  
   res.json({
    message:"otp resen sucessfully",
    otp:otp
   })
}

module.exports = {otpController,resendOtp};



