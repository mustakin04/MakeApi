const authMiddleware=(req,res,next)=>{
       if(req.session.auth)
       {
        next()
       }else{
        return res.json("unauthorized user")
       }
}
module.exports=authMiddleware