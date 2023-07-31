import React from 'react';   //{useContext, useEffect}
// import noteContext from '../context/notes/noteContext';
import { motion} from "framer-motion"

const About = () => {

  
  const item = {
    hidden: {  opacity: 0,x:-200},
    visible: {
    opacity:1,
  x:0,
transition:{
  duration:0.5,delay:0.1
}


    }
  };
  

  return (
    
 <>
<motion.div 
  variants={item}
     initial="hidden"
     animate="visible"
     whileInView={{ opacity: 1 }}
     transition={{duration:0.7}}
  

className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">Welcome</h1>
        <p className="lead text-muted mb-0">Welcome to our React application! We're excited to have you on board. Here at iNotes, we've created a user-friendly platform for you to store and manage your notes with ease. Our primary goal is to provide a seamless experience that allows you to focus on what truly matters - organizing your thoughts and ideas.</p>
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"/></div>
    </div>
  </div>
</motion.div>

<motion.div 
   variants={item}
     initial="hidden"
     animate="visible"
     whileInView={{ opacity: 1 }}
     transition={{duration:0.7}}
     
className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">About iNotes</h2>
        <p className="font-italic text-muted mb-4">At iNotes, we understand that staying organized is key to productivity and creativity. That's why we've designed a robust note-taking application that empowers you to create, edit, and organize your notes in a simple and efficient manner.</p>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Secure and Personalized Accounts</h2>
        <p className="font-italic text-muted mb-4">Your privacy and security are of utmost importance to us. With [Your Application Name], you get your own separate account, ensuring that your notes are always private and accessible only to you. Our state-of-the-art database system ensures that your data remains safe and encrypted, providing you with peace of mind as you capture your thoughts and ideas.</p>
      </div>
    </div>
  </div>
</motion.div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our team</h2>
      </div>
    </div>

    <motion.div
       whileHover={{ scale: 1.1}}
       whileTap={{ scale: 0.9 }}
       initial="hidden"
       animate="visible"
       whileInView={{ opacity: 1 }}
       transition={{duration:0.7}}
    
    
    
    
    className="row text-center">
     
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Abeer Shah</h5><span className="small text-uppercase text-muted">MERN developer</span>
         
        </div>
      </div>
     

     
      <motion.div
         whileHover={{ scale: 1.1}}
         whileTap={{ scale: 0.9 }}
         initial="hidden"
         animate="visible"
         whileInView={{ opacity: 1 }}
         transition={{duration:0.7}}
      
      className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">Junior Backend Dev</span>
        
        </div>
      </motion.div>
     

   
      <motion.div
         whileHover={{ scale: 1.1}}
         whileTap={{ scale: 0.9 }}
         initial="hidden"
         animate="visible"
         whileInView={{ opacity: 1 }}
         transition={{duration:0.7}}

      className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">Designer</span>
         
        </div>
      </motion.div>
     

      
      <motion.div
         whileHover={{ scale: 1.1}}
         whileTap={{ scale: 0.9 }}
         initial="hidden"
         animate="visible"
         whileInView={{ opacity: 1 }}
         transition={{duration:0.7}}


      className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">FrontEnd developer</span>
          
        </div>
      </motion.div>
      

    </motion.div>
  </div>
</div>





{/* <footer className="bg-light pb-5">
  <div className="container text-center">
    <p className="font-italic text-muted mb-0">&copy; Copyrights SyedShah All rights reserved.</p>
  </div>
</footer> */}

 </>
  )
}

export default About;