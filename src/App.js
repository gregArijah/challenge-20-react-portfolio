import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
