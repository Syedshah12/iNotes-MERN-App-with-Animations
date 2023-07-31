const express = require("express");
const router = express.Router();
const Note=require('../models/notes');
const { body,validationResult} = require('express-validator');
const fetchUser=require('../middleware/fetchUser')




//route for getting notes
router.get('/getnotes',fetchUser,async (req,res)=>{
try {
    const note=await Note.find({user:req.user.id});
    res.json(note);
} catch (error) {
    res.status(404).send(error);
}
})



//add a note with respect to Users
router.post('/addnote', [
    body('title','Name should be minimum of 3 characters').isLength({min:3}),
    body('description','enter a valid email').isLength({min:5}),
  ],fetchUser,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({errors:errors.array()});
    }
    try {
  const note=new Note({
    user:req.user.id,
    title:req.body.title,
    description:req.body.description
  })
  await note.save();
        res.json(note)  
    } catch (error) {
        res.status(404).send(error);
    }
    })



//update a note 
router.put('/updatenote/:id',fetchUser,async(req,res)=>{
  try {
    let {title,description}=req.body;
let newNote={};
if(title){newNote.title=title}
if(description){newNote.description=description}

let note=await Note.findById(req.params.id);
if(!note){return  res.status(404).send("Not found");}
if(note.user.toString()!==req.user.id){
  return  res.status(404).send("Access Denied");
}
note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json(note)
  } catch (error) {
    res.status(404).send(error);
}
})



//delete a note with respect to a user 
router.delete('/deletenote/:id',fetchUser,async(req,res)=>{
  try {
let note=await Note.findById(req.params.id);
if(!note){return  res.status(404).send("Not found");}
if(note.user.toString()!==req.user.id){
  return  res.status(404).send("Access Denied");
}
note=await Note.findByIdAndDelete(req.params.id);
    res.json({"success":"note has been deletd",note:note})
  } catch (error) {
    res.status(404).send(error);
}
})







module.exports=router;