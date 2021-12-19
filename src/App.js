import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {

  const [pages] = useState([
    {
      name: 'About me',
    },
    { name: 'Portfolio'  },
    { name: 'Contact'  },
    { name: 'Resume' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
    <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <Page currentPage={currentPage}></Page>
      <Footer />
    </div>
  );
}

export default App;
