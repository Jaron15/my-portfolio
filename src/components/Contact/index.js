import React from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function ContactForm() {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    form.current,
    process.env.REACT_APP_USER_ID)
    .then((result) => {
      console.log(result.text);
      alert("Sent!");
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert("FAILED...", error);
    });
};


      
    return (
        
    

     
      <div className="Cdetails">
        <h1>Contact Details:</h1>
        <p>Email Address: jaronkenyon@gmail.com</p> 
        <p>Github: https://github.com/Jaron15</p>
        <p>Linkedin: https://www.linkedin.com/in/jaron-kenyon-41917b217/</p>
        <p></p>
      </div>
  
      )
    
}

export default ContactForm;