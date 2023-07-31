import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import NoteState from './context/notes/Notestates';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';




function App() {
  const [alert, setAlert] = useState({type:"",msg:"",display:"d-none"});
  const showAlert=(type,msg,display)=>{
    setAlert({
      type:type,
      msg:msg,
      display:display,
    });
    setTimeout(()=>{
      setAlert({type:"",msg:"",display:"d-none"})
    },1500)
    }

  return (
    <>
    <NoteState>
    <Router>
        <Navbar   showAlert={showAlert} />
       <Alert alert={alert}/>
        <Routes>
          <Route path='/' element={<Home showAlert={showAlert}/>} />
          <Route path="/about" element={<About showAlert={showAlert} />} />
          <Route path="/login" element={<Login  showAlert={showAlert} />} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
      </Routes>
      
      </Router>
      </NoteState>
      <Footer/>
    </>
  );
}

export default App;
