const jwt = require('jsonwebtoken');
function middleware(req,res,next){
   const authHeader = req.headers.authorization;
     console.log(authHeader)
     var decoded = jwt.verify(authHeader, 'must');
           console.log(decoded) // bar
}
module.exports=middleware;