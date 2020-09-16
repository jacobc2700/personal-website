import React, { Fragment } from 'react';

const Projects = () => {
  return (
    <Fragment>
      <section className='projects'>
        <h1 className='project-title'>Projects</h1>
        <div class='card'>
          <h1>Flexer</h1>
          <p class='title'>JavaScript</p>
          <p>Flexer is a social media website for aspiring developers.</p>
          <div class='card-links'>
            <a href='#'>Website</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div class='card'>
          <h1>Split</h1>
          <p class='title'>Java</p>
          <p>Java version of the Split board game by Hasbro Toys.</p>
          <div class='card-links'>
            <a href='#'>Website</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div class='card'>
          <h1>Flexer</h1>
          <p class='title'>JavaScript</p>
          <p>Flexer is a social media website for aspiring developers.</p>
          <div class='card-links'>
            <a href='#'>Website</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
