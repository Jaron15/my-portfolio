import React from 'react';
import PhotoList from '../PhotoList';



function Portfolio() {

  return (
    <section className="my-5" >
      <h1 id="about">Portfolio</h1>
      <div className="my-2">
        <PhotoList />
      </div>
    </section>
  )
}

export default Portfolio;