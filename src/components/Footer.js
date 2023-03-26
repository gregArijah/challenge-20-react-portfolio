import React from 'react';
import '../css/Footer.css'; 

function Footer() {
  return (
    <footer className='footer bg-dark text-white text-center'>
      <div className='row'>
        <div className='col'>
          <a href = 'https://www.github.com'>Github</a>
        </div>
        <div className='col'>
          <a href = 'https:/.www.linkedin.com'>Linkedin</a>
        </div>
        <div className='col'>
          <a href = 'https://twitter.com/'>Twitter</a>
        </div>
  
      </div>
    </footer>
  );
} 

export default Footer;