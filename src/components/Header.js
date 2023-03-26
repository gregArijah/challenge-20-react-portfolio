import React from 'react';
import '../css/Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className='header'>
      <span className='name'>Greg Griffith</span>
      <section className='pages'>
        <a href = '#about' onClick={()=>handlePageChange('About')}  className={currentPage === 'About' ? 'active' : ''}>
          About Me
        </a>
        <a href = '#portfolio' onClick={()=>handlePageChange('Portfolio')}  className={currentPage === 'Portfolio' ? ' active' : ''}>
          Portfolio
        </a>
        <a href = '#resume' onClick={()=>handlePageChange('Resume')}  className={currentPage === 'Resume' ? 'active' : ''}>
          Resume
        </a>
        <a href = '#contact' onClick={()=>handlePageChange('Contact')}  className={currentPage === 'Contact' ? ' active' : ''}>
          Contact
        </a> 
        
      </section>
    </header>
  );
} 

export default Header;