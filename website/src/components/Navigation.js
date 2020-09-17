import React, { Fragment } from 'react';

const Navigation = () => {
  return (
    <Fragment>
      <nav className='navbar'>
        <h1>
          <a href='/#'>Humboo</a>
        </h1>
        <ul>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='landing'
              data-target='.landing'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='about'
              data-target='.about'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='projects'
              data-target='.projects'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='footer'
              data-target='.footer'
            >
              Links
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
