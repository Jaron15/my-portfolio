import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About me':
        return <About />;
      case 'Portfolio':
         return <Portfolio />;
       case 'Contact':
         return <Contact />;
      case 'Resume':
        return <Resume />;
       default:
        return <About />;
    }
  };

  return (
    <section className="page">
      <h2 className="page-title">{currentPage.name}</h2>
      {renderPage()}
    </section>
  );
}
export default Page;