import React,{useState} from "react";
import {useNavigate} from "react-router-dom"

const Signup = (props) => {
    const navigate=useNavigate();
    const [signCredentials, setSignCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    const {name,email,password,cpassword}=signCredentials;
    const userSignUp = async (name,email,password,cpassword) => {
        //TODO:Api Call
        const response = await fetch("http://localhost:5000/api/v1/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password}),
        });
        const result=await response.json();
        const {success,token}=result;
        if(password===cpassword){
            console.log("password matched");
            if(success){
                localStorage.setItem("token",token);
                navigate('/');
                props.showAlert("success","Success: Account Created Successfuly","d-block");
             }else{
                props.showAlert("danger","Erorr: Some Error Ocurred","d-block");
             }
           }else{
            props.showAlert("danger","Erorr: Password not matched","d-block");
           }

    }

const handleSignin=async (e)=>{
e.preventDefault();
userSignUp(name,email,password,cpassword)

}

const onChange=(e)=>{
    setSignCredentials({...signCredentials,[e.target.name]:e.target.value})
}


















    return (
        <section  className="my-4" >
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black border-0" >
                <div className="card-body" >
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form onSubmit={handleSignin} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" onChange={onChange} id="name" name="name" className="form-control" />
                            <label className="form-label" htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" onChange={onChange}  id="email" name="email" className="form-control" />
                            <label className="form-label" htmlFor="email">Your Email</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" onChange={onChange}  id="password" name="password" className="form-control" />
                            <label className="form-label" htmlFor="password">Password</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" onChange={onChange}  id="cpassword" name="cpassword" className="form-control" />
                            <label className="form-label" htmlFor="cpassword">Repeat your password</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4  mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Signup;