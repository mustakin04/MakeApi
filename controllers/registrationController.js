const emailValidation = require("../handler/emailValidation");
const passwordValidation = require("../handler/passwordValidation");
const bcrypt = require("bcrypt");
const userSchema = require("../model/userSchema");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";
const crypto = require("crypto");
const emailverification = require("../handler/emailverification");

const registrationController = async (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  if (!firstName || !lastName) {
    return res.json("first&last name not require");
  }
  if (!email) {
    return res.json("email is not require");
  }
  if (!emailValidation(email)) {
    return res.json("email is not valid");
  }
  if (!password) {
    return res.json("password is not require");
  }
  if (!passwordValidation(password)) {
    return res.json("password not valid");
  }
  const allUser = await userSchema.find();
  const existingUser =  allUser.find((item) => item.email === email);
  if (existingUser) {
    return res.json("alredy this mail existing");
  }
  const otpExpiry= new Date(Date.now() + 10 * 60 * 1000); 
  const otp=crypto.randomInt(1000000,9000000)
  bcrypt.hash(password, 10, async function (err, hash) {
    // console.log(hash,"26")
    const data = new userSchema({
      firstName,
      lastName,
      email,
      password: hash,
      otp,
      otpExpiry
    });
    emailverification(email,otp)
    await data.save();
    res.json({
      message: "sucess",
      data: data,
    });
  });
};

module.exports = registrationController;
