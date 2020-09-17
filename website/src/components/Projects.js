import React, { Fragment } from 'react';

const Projects = () => {
  return (
    <Fragment>
      <section className='projects'>
        <h1 className='project-title'>Projects</h1>
        <div className='card'>
          <h1>Flexer</h1>
          <p className='title'>JavaScript</p>
          <p>Flexer is a social media website for aspiring developers.</p>
          <div className='card-links'>
            <a href='/#'>Website</a>
            <a href='/#'>GitHub</a>
          </div>
        </div>
        <div className='card'>
          <h1>Split</h1>
          <p className='title'>Java</p>
          <p>Java version of the Split board game by Hasbro Toys.</p>
          <div className='card-links'>
            <a href='/#'>Website</a>
            <a href='/#'>GitHub</a>
          </div>
        </div>
        <div className='card'>
          <h1>Choicy</h1>
          <p className='title'>Python</p>
          <p>The college that you attend should be your choice.</p>
          <div className='card-links'>
            <a href='/#'>Website</a>
            <a href='/#'>GitHub</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
