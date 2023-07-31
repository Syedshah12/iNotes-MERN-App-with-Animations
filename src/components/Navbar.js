import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import {
  Link,
useLocation
} from "react-router-dom";
import {useNavigate} from "react-router-dom"


export default function Navbar(props) {
  const context=useContext(noteContext);
  const {getUser,userData,setUserData}=context;

  const {name}=userData;
const handleUser= ()=>{
  if(name===""){
    getUser()
    setUserData(userData);
    }else{
setUserData({id:"",name:"",email:"",date:""});
    }
}

 const checkLogin=()=>{
  if(localStorage.getItem('token')){
return true
  }else{
   return false
  }
 }
          
 

 
const navigate=useNavigate();
  let location=useLocation();
 const handleLogout=()=>{
  localStorage.removeItem('token');
  navigate('/login');
  props.showAlert("success","Success: Successfully logged out","d-block");
  setUserData({id:"",name:"",email:"",date:""});
  
 }
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2" >
    <div className="container-fluid">
      <a  className="navbar-brand"  style={{
        cursor:"default",
        pointerEvents: "none"
      }} href="/">iNotes  </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
          </li>     
           <li className="nav-item">
            <Link className={`nav-link ${checkLogin()?"active":""}`} ><i onClick={handleUser} className="fa-solid fa-user"></i><span onClick={handleUser}>&nbsp;  {userData.name}</span></Link>
          </li> 
       
        </ul>
        
        {localStorage.getItem('token')?<button onClick={handleLogout} className='btn btn-info'>Logout</button>:<form>
        <Link type="submit" to="/login" className="btn btn-info mx-2">Login</Link>
        <Link type="submit" to="/signup" className="btn btn-info mx-2">SignUp</Link>
        </form>}
      </div>
    </div>
  </nav>
  </div>
  )
}
