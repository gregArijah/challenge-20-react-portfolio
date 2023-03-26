import React from 'react';
import '../css/Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <span className='navbar-brand'>Greg Griffith</span>
      <section>
        <ul className='navbar-nav flex-row'>
          <li className="nav-item">
              <a className= 'nav-link mx-2' href = '#about' onClick={()=>handlePageChange('About')} >
                About Me
              </a>
          </li>    
          <li className="nav-item">    
              <a className= 'nav-link mx-2' href = '#portfolio' onClick={()=>handlePageChange('Portfolio')} >
                Portfolio
              </a>
          </li>    
          <li className="nav-item">
              <a className= 'nav-link mx-2' href = '#resume' onClick={()=>handlePageChange('Resume')} >
                Resume
              </a>
          </li>    
          <li className="nav-item">    
              <a className= 'nav-link mx-2' href = '#contact' onClick={()=>handlePageChange('Contact')} >
                Contact
              </a>
          </li> 
        </ul>
      </section>
    </nav>
  );
} 

export default Header;