import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { motion } from "framer-motion"
const Addnote = (props) => {
  const [note, setnote] = useState({ title: "", description: "" })
  const context = useContext(noteContext);
  const { addNotes } = context;

  const item = {
    hidden: { x: '-100vw' },
    visible: {
      type: 'tweeny',
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }

  }

  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description);
    props.showAlert("success", "Success: Note Added Successfully", "d-block");
    setnote({ title: "", description: "" })
  }

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <motion.div variants={item}
      initial="hidden"
      animate="visible" className='container-sm my-3'>
      <form className='p-2'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" onChange={onChange} className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input value={note.description} type="text" onChange={onChange} className="form-control" id="description" name='description' minLength={5} required />
        </div>
        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
      </form>
    </motion.div>
  )
}

export default Addnote;