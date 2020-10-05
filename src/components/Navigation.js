import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Blog from '../Blog';

const Navigation = () => {
  return (
    <Router>
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
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/blog'>
              <Blog />
            </Route>
          </Switch>
        </nav>
      </Fragment>
    </Router>
  );
};

export default Navigation;
