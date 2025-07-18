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
    console.log(req.session,"33")
     req.session.auth=true
     req.session.user={
        id:user.id,
       email:  user.email,
       fistName:user.firstName,
       roles:user.role
     }

}
const dasboard=(req,res)=>{
    res.json("wellcome to dasbord")
}
const logOut=(req,res)=>{
    req.session.destroy(function(err) {
     if(err){
        return res.json("logout session error")
     }
     else{
        return res.json("logout sucessfully done")
     }
})
}
module.exports={loginController,dasboard ,logOut}