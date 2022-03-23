import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
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
    }, (error) => {
      console.log(error.text);
      alert("FAILED...", error);
    });
};


      
    return (
        
    <div className="container">
    <div className="row">
      <div className="col align-self-center">
        <h1 className="text-center">Contact me by Email:</h1>
        {/* <!-- contact form --> */}
        <form ref={form} onSubmit={sendEmail}>
          {/* <!-- name --> */}
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              placeholder="enter your name"
            />
          </div>

          {/* <!-- email --> */}
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="enter your email"
            />
          </div>

          {/* <!-- subject --> */}
          <div className="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              placeholder="enter email subject"
            />
          </div>

          <div className="form-group">
            <label for="email_body">Message</label>
            <textarea
              className="form-control"
              id="email_body"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="contactBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
      )
    
}

export default ContactForm;