import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <nav className='header'>
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

export default Header;