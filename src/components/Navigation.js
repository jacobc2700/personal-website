import React, { Fragment } from 'react';
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';

const Navigation = (props) => {
  function changeTheme() {
    if (props.theme === 'light') {
      props.setTheme('dark');
    } else {
      props.setTheme('light');
    }
    console.log(props.theme);
  }

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
          <li>
            <button onClick={changeTheme}>
              <BsSun />
              {/* {props.theme} */}
            </button>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
