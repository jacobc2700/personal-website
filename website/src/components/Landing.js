import React, { Fragment } from 'react';
import Navigation from './Navigation';

const Landing = () => {
  return (
    <Fragment>
      <section class='landing'>
        <Navigation></Navigation>
        <div class='intro'>
          <h1 class='header'>Hello, I'm Humboo.</h1>
          <a href='/#' class='btn'>
            Explore &nbsp; <i class='fa fa-arrow-down'></i>
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
