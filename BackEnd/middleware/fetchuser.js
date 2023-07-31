var jwt = require('jsonwebtoken');
const JWT_KET='thisIsMySectretKey'

const fetchUser=(req,res,next)=>{
const token=req.header('auth-token')
if(!token){
    res.status(401).send({error:'pls authenticate using a valid token'})
}
try {
    var data = jwt.verify(token, JWT_KET);
    req.user=data.user;
    next();
} catch (error) {
    res.status(401).send({error:'pls authenticate using a valid token'})
}
}



module.exports = fetchUser;