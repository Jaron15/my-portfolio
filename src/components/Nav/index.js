import React, { useEffect } from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = currentPage.name
  }, [currentPage]);

  return (  
         
      <nav>
          <div className="nav-img">
              <h1>Jaron Kenyon</h1>
        <ul className="flex-row nav-row">
          {pages.map((page) => (
            <li
              className={`mx-5 nav-items ${
                currentPage.name === page.name && 'navActive'
                }`}
              key={page.name}
            >
              <span
                onClick={() => setCurrentPage(page)}
              >
                {page.name}
              </span>
            </li>
          ))}
        </ul>
        </div>
      </nav>
  );
}

export default Nav;