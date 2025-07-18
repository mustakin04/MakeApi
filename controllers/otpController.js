const userSchema = require("../model/userSchema");

const otpController = async (req, res) => {
  const { email, otp } = req.body;
  if (!email) {
    return res.json("email is not require ");
  }
  if (!otp) {
    return res.json("otp is not require");
  }
  const user = await userSchema.findOne({ email: email });
  console.log(user, "user");

  if (!user) {
    return res.json("User not found");
  }
  if (user.isVerified) {
    return res.json("User is verfied");
  }
  if (user.otp !== otp) {
    return res.json("invalid otp or rong otp");
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
module.exports = otpController;
