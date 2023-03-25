import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <span className='name'>Greg Griffith</span>
      <section className='pages'>
        <a href = '/'>About Me</a>
        <a href = '/'>Portfolio</a>
        <a href = '/'>Resume</a>
        <a href = '/'>Contact</a>
      </section>
    </nav>
  );
} 

export default Navbar;