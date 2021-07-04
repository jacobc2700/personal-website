import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BsBook } from 'react-icons/bs';
import './scss/styles.scss';

const Navigation = (props) => {
  return (
    <Fragment>
      <nav className='navbar'>
        <div className='blog-header'>
          <BsBook />
          <a href='#'>Humboo</a>

          {/* </div> */}
          {/* <div>Hello</div> */}
          {/* <div>
            <BsBook />
          </div>
          <div>
            <a href='/#'>Humboo</a>
          </div> */}
        </div>
        <ul>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='about'
              data-target='.about'
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='about'
              data-target='.about'
            >
              Toggle
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
