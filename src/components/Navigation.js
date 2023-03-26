import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  // check value of `currentPage`. render component.
  const renderPage = () => {
    if (currentPage === 'About') return <About />;
    if (currentPage === 'Portfolio') return <Portfolio />;
    if (currentPage === 'Contact') return <Contact />;
    if (currentPage === 'Resume') return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* pass the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* call the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}