import React, { Fragment } from 'react';
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import { useEffect } from 'react';

const Navigation = (props) => {
  useEffect(() => {
    props.setTheme(localStorage.getItem('theme'));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('d');
    if (props.theme === 'light') {
      localStorage.setItem('theme', 'dark');
      props.setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      props.setTheme('light');
    }
    // localStorage.setItem('theme', theme);
    // setTheme(theme);
  };

  function changeTheme() {
    if (props.theme === 'light') {
      props.setTheme('dark');
    } else {
      props.setTheme('light');
    }
    // console.log(props.theme);
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
            <button onClick={handleClick}>
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
