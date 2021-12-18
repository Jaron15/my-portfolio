import React from 'react'


function Resume() {

  return (
    <section className="my-5" >
      <h1 id="about">Resume</h1>
      <div className="my-2">
        <h2>Front-end Proficiencies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>

        <h2>Back-end Proficiencies</h2>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
      </div>
    </section>
  )
}

export default Resume