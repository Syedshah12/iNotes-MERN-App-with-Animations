import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);
   const [userData, setUserData] = useState({id:"",name:"",email:"",date:""});


    const getAllNotes = async () => {

        const response = await fetch("http://localhost:5000/api/v1/getnotes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const res = await response.json();
        setNotes(res);
    }
    const getUser = async () => {

        const response = await fetch("http://localhost:5000/api/v1/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const res = await response.json();
      setUserData(res);
    }



 











    const addNotes = async (title, description) => {
        //TODO:Api Call
        const response = await fetch("http://localhost:5000/api/v1/addnote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title,description}),
        });
        const note=await response.json();
           setNotes(notes.concat(note));
    }

    const delNotes = async (id) => {
          // eslint-disable-next-line
        const response = await fetch(`http://localhost:5000/api/v1/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        })
        
        setNotes(newNotes);
    }

    const editNotes = async (id,title,description) => {
         // eslint-disable-next-line
        const response = await fetch(`http://localhost:5000/api/v1/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title,description}),
        });
    let newNotes=JSON.parse(JSON.stringify(notes));
for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if(element._id===id){
        newNotes[index].title=title;    
        newNotes[index].description=description;    
    break;
    }
}
setNotes(newNotes)
    }




    return (
        <NoteContext.Provider value={{ userData,notes, setNotes, addNotes, delNotes, getAllNotes,editNotes, getUser,setUserData }}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;