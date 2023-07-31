const express = require("express");
const router = express.Router();
const User=require('../models/user');
const { body,validationResult} = require('express-validator');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_KET='thisIsMySectretKey'
const fetchUser=require('../middleware/fetchUser')




// Home page route.
router.post("/createuser", [
  body('name','Name should be minimum of 3 characters').isLength({min:3}),
  body('email','enter a valid email').isEmail(),
  body('password','password is too short').isLength({min:5})
  

],async (req, res)=> {
  let success=false;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({success,errors:errors.array()});
    }
    let user=await User.findOne({email:req.body.email});
    if(user){
     return  res.status(400).json({success,err:'user already exists with this email'})
    }

  //generating salt and generating hash password with bycypt and storing in db.
    const saltRounds = 10;
    const password=req.body.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPass = bcrypt.hashSync(password, salt);
  user =await User.create({
    name:req.body.name,
    email:req.body.email,
    password:hashedPass,
  })

//Generating token and sending it 
  const data={
  user:{
    id:user.id
  }
  }
  success=true;
 let token = jwt.sign(data, JWT_KET);
 res.json({success,token});
  } catch (error) {
    res.status(404).send(error);
  }
    
});






// About page route.
router.post("/login", [
  body('email','enter a valid email').isEmail(),
  body('password','password is too short').exists(),
],async (req, res)=> {
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({success,errors:errors.array()});
  }
try {
  const {email,password}=req.body;
let user=await User.findOne({email});
  if(!user){
    return res.status(400).json({success,error:"pls login with correct credentials"});
  }
const passCompare=bcrypt.compareSync(password, user.password);
if(!passCompare){
  return res.status(400).json({success,error:"pls login with correct credentials"});
}
//generating token and sending to client
const data={
  user:{
    id:user.id
  }
  }
  success=true;
 let token = jwt.sign(data, JWT_KET);
  res.json({success,token});
}
catch(error) {
    res.status(404).send(error);
  }
});







//get loggedIn user details 
router.post('/getuser',fetchUser,async (req,res)=>{
try {
  userId=req.user.id;
  const user=await User.findById(userId).select('-password');
  res.send(user);
} catch (error) {
  res.status(500).send("internal server error")
}
})











module.exports = router;