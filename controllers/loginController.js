const emailValidation = require("../handler/emailValidation");
const passwordValidation = require("../handler/passwordValidation");
const userSchema = require("../model/userSchema");
const bcrypt = require('bcrypt');
const myPlaintextPassword = 's0/\/\P4$$w0rD';

const loginController=async(req,res)=>{
  const {
    email,password
   }= req.body
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
  const user=await userSchema.findOne({email:email})
//   console.log(user)
   if(!user){
         return res.json("user not found")
   }
   if(!user.isVerified){
    return res.json("user is not found verified")
   }
   else{
     bcrypt.compare(myPlaintextPassword, user.password, function(err, result) {
    // result == true
         if(result=password){
            return res.json("sucess")
         }
       });
   }

}

module.exports=loginController