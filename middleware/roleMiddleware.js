   const roleMiddleware=(item)=>{
            return(req,res,next)=>{
                if(req.session.user.roles==item){
                    next()}
                else{
                    return res.json("exis dinay")
                }
            }
   }
   module.exports=roleMiddleware