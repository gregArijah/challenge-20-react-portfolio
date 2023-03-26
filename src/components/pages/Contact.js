import React, { useState } from "react";
import {Button}  from 'react-bootstrap';

import '../../css/Contact.css';


export default function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

    const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${Name},\nThank you for your message, I look forward to further communications with you in the future.`);
    setName('');
    setEmail('');
    setMessage('');
  };    
  return (
    <div className='container'>
        <h2>Contact</h2>
        <p>
            Thank you for visiting my portfolio! Whether you are a potential client or a recruiter interested in my skills, please don't hesitate to leave me a message on the contact form. I'd be thrilled to hear from you!
        </p>
        <form className="form">
          <div className="form-group">
            
            <label htmlFor='name'>Name</label>
            <input
              value={Name}
              name="Name"
              type="text"
              placeholder="Enter your name"
              onChange={handleNameChange}
            />
          </div>  
          <div className="form-group">
          <label htmlFor='email'>Email</label>
            <input
              value={Email}
              name="Email"
              type="text"
              placeholder="Enter your email address"
              onChange={handleEmailChange}
            />
          </div>   
          <div className="form-group">
          <label htmlFor='message'>Message</label>
            <textarea
              className="form-control"
              value={Message}
              name="Message"
              type="text"
              placeholder="Leave a message"
              rows="5"
              onChange={handleMessageChange}
            />
          </div> 
          <Button onClick={handleFormSubmit}>
              Submit
          </Button>
      </form>
    </div>
  );
}


