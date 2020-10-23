import React, { Fragment } from 'react';

const Projects = () => {
  return (
    <Fragment>
      <section className='projects'>
        <h1 className='project-title'>Projects</h1>
        <div className='card'>
          <h1>Newton Employee Salaries</h1>
          <p className='title'>JavaScript</p>
          <p>Browse payroll data for employees in Newton Public Schools.</p>
          <div className='card-links'>
            <a href='http://salaries.thehumboo.com/'>Website</a>
            <a href='https://youtu.be/eYor5dEHkTI'>Video</a>
          </div>
        </div>
        <div className='card'>
          <h1>Newton Pavements</h1>
          <p className='title'>JavaScript</p>
          <p>Browse street construction data in Newton, Massachusetts.</p>
          <div className='card-links'>
            <a href='https://www.thehumboo.com/newton-pavements/'>Website</a>
            <a href='https://youtu.be/uxe2BDUrhhI'>Video</a>
          </div>
        </div>
        <div className='card'>
          <h1>COVID-19 Dashboard</h1>
          <p className='title'>JavaScript</p>
          <p>
            Browse virus data for world countries, US counties, and US states.
          </p>
          <div className='card-links'>
            <a href='http://virus.thehumboo.com/'>Website</a>
            <a href='https://youtu.be/8eJRk9nEbwI'>Video</a>
          </div>
        </div>
        {/* <div className='card'>
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
        </div> */}
      </section>
    </Fragment>
  );
};

export default Projects;
