import React, { useContext, useEffect,useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import { motion } from "framer-motion"
import {useNavigate} from "react-router-dom"


const Notes = (props) => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
       
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  










  let navigate=useNavigate();
    const [note, setnote] = useState({id:"",etitle:"",edescription:""})
    const context=useContext(noteContext);
    const {notes,getAllNotes,editNotes }=context;

    const modalBtnRef = useRef(null);
  const closeRef=useRef(null);

    
const onChange=(e)=>{
    e.preventDefault();
    setnote({...note,[e.target.name]:e.target.value})
}

const handleClick=()=>{
   editNotes(note.id,note.etitle,note.edescription);
   closeRef.current.click();
   props.showAlert("success","Success: Note Edited Successfully","d-block");
}


const updateNote=(currentNote)=>{
   modalBtnRef.current.click();
   setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description})
  
}





 useEffect(() => {
  if(localStorage.getItem('token')){
    getAllNotes()
  }else{
navigate('/login')
  }
   //eslint-disable-next-line
 }, [])
 
  return (

<>

<button ref={modalBtnRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">


      <form className='p-2'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" value={note.etitle}  onChange={onChange}  className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp"  minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" onChange={onChange} value={note.edescription}  className="form-control" id="edescription" name='edescription'  minLength={5} required/>
  </div>
</form>


      </div>
      <div className="modal-footer">
        <button ref={closeRef}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5 } type="button" onClick={handleClick} className="btn btn-primary">Edit Note</button>
      </div>
    </div>
  </div>
</div>


    
   <motion.div    className='container' 
    variants={container}
    initial="hidden"
    animate="visible">
    <h2>
        Your Notes
      </h2>
      <div className='container'>
        {notes.length===0 && "No Notes To Display..."}
      </div>
    <div className='row my-3'>
  {notes.map((note)=>{
    return <Noteitem  showAlert={props.showAlert} key={note._id}    note={note} updateNote={updateNote}  />
  })}
    </div>
   
   </motion.div>
   </>
  )
}

export default Notes