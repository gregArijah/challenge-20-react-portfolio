import React, { useState } from "react";
//import '../../css/Contact.css';

export default function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

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
    <div>
        <h2>Contact</h2>
        <p>
            Thank you for visiting my portfolio! Whether you are a potential client or a recruiter interested in my skills, please don't hesitate to leave me a message on the contact form. I'd be thrilled to hear from you!
        </p>
        <form className="form">
        <input
          value={Name}
          name="Name"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={Email}
          name="Email"
          type="text"
          placeholder="Enter your email address"
        />
        <input
          value={Message}
          name="Message"
          type="text"
          placeholder="Leave a message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}


