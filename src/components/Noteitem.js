import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import { motion } from "framer-motion"
const Noteitem = (props) => {


  
  const item = {
    hidden: {  opacity: 0,y:75},
    visible: {
      
    opacity:1,
  y:0,
transition:{
  duration:0.5,delay:0.1
}


    }
  };
  
  


    const {note,updateNote}=props;
    const context=useContext(noteContext);
    const {delNotes}=context;
    const handleClick=()=>{
delNotes(note._id)
props.showAlert("danger","Success: Note Deleted  Successfully","d-block");
    }
   



  return (
    
   <>
   <motion.div  
   variants={item}
   whileHover={{ scale: 1.1}}
     whileTap={{ scale: 0.9 }}
     initial="hidden"
     animate="visible"
     whileInView={{ opacity: 1 }}
     transition={{duration:0.2}}




  className='col-md-3 my-3'>
   <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={handleClick}></i>
    <i className="fa-solid fa-pen mx-2" onClick={()=>{
        updateNote(note)
    }}></i>
  </div>
</div>
   </motion.div>
   
   </>
  )
}

export default Noteitem