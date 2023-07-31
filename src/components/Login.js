import React,{useState} from "react"
import {useNavigate} from "react-router-dom"


const Login = (props) => {
  
    const navigate = useNavigate()
const [credentials, setCredentials] = useState({email:"",password:"",cpassword:""})
const {email,password,cpassword}=credentials;
    const userLogin = async (email,password,cpassword) => {
        //TODO:Api Call
        const response = await fetch("http://localhost:5000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password}),
        });
        const result=await response.json();
         const {success,token}=result;
        
       if(password===cpassword){
       
        if(success){
            localStorage.setItem("token",token);
            navigate('/');
            
        props.showAlert("success","Success: Successfully logged in","d-block");
         }else{
          props.showAlert("danger","Erorr: Wrong Email or Password","d-block");
         }
       }else{
        props.showAlert("danger","Erorr: Password Not Matched","d-block");
       }
           
         
        
            
       
    }


const onChange=(e)=>{
setCredentials({...credentials,[e.target.name]:e.target.value});
}

   
const handleSubmit=async (e)=>{
    e.preventDefault();
    userLogin(email,password,cpassword)
    }
    




    return (
      <>
      
       <div className="container" >
    
        <form className="py-5" style={{width:"50%",margin:"auto"}} onSubmit={handleSubmit}>
  <div className="mb-3">
  <h2 className="mb-3">Please Login or SignUp to Continue.</h2>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={onChange} className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} id="password" name="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" onChange={onChange} id="cpassword" name="cpassword"/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
       </div>
   
       </>
    )
}
export default Login;
