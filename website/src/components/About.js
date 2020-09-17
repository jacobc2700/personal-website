import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <section className='about'>
        <h1>About Me</h1>
        <div className='biography'>
          <div>
            <p>
              My name is Jacob Chang and I'm an aspiring software engineer. I'm
              currently a senior in high school and I love computer programming.
              I spend my free time developing web applications and learning new
              technologies. I am currently working on three large-scale projects
              with JavaScript, Java, and Python. I use JavaScript for my web
              applications, Java for data structures & algorithms, and Python
              for my data science, machine learning, and artificial intelligence
              projects. When I'm not programming, you can find me playing the
              piano or making videos.
            </p>
          </div>
        </div>

        <div className='technology-list-container'>
          <div>
            <div>
              <i className='devicon devicon-mongodb-plain colored'></i>
              <span>MongoDB</span>
            </div>
            <div>
              <i className='devicon devicon-mongodb-plain colored'></i>
              <span>MongoDB</span>
            </div>
            <div>
              <i className='devicon devicon-express-original colored'></i>
              <span>Express</span>
            </div>
          </div>
          <div>
            <div>
              <i className='devicon devicon-sass-plain colored'></i>
              <span>Express</span>
            </div>
            <div>
              <i className='devicon devicon-sass-plain colored'></i>
              <span>Sass</span>
            </div>
            <div>
              <i className='devicon devicon-sass-plain colored'></i>
              <span>Sass</span>
            </div>
          </div>
          <div>
            <div>
              <i className='devicon devicon-sass-plain colored'></i>
              <span>React</span>
            </div>
            <div>
              <i className='devicon devicon-sass-plain colored'></i>
              <span>Sass</span>
            </div>
            <div>
              <i className='devicon devicon-bootstrap-plain colored'></i>
              <span>Bootstrap</span>
            </div>
          </div>
          <div>
            <div>
              <i className='devicon devicon devicon-github-plain colored'></i>
              <span>Node.js</span>
            </div>
            <div>
              <i className='devicon devicon-heroku-original colored'></i>
              <span>Heroku</span>
            </div>
            <div>
              <i className='devicon devicon-mongodb-plain colored'></i>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
