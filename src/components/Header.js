import React from 'react';
import '../css/Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className='header'>
      <span className='name'>Greg Griffith</span>
      <section className='pages'>
        <a href = '#about' onClick={()=>handlePageChange('About')} >
          About Me
        </a>
        <a href = '#portfolio' onClick={()=>handlePageChange('Portfolio')} >
          Portfolio
        </a>
        <a href = '#resume' onClick={()=>handlePageChange('Resume')} >
          Resume
        </a>
        <a href = '#contact' onClick={()=>handlePageChange('Contact')} >
          Contact
        </a> 
        
      </section>
    </header>
  );
} 

export default Header;