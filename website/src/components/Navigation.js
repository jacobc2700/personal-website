import React, { Fragment } from 'react';

const Navigation = () => {
  return (
    <Fragment>
      <nav class='navbar'>
        <h1>
          <a href='/#'>Humboo</a>
        </h1>
        <ul>
          <li>
            <a href='/#'>Home</a>
          </li>
          <li>
            <a href='/#'>About</a>
          </li>
          <li>
            <a href='/#'>Projects</a>
          </li>
          <li>
            <a href='/#'>Links</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
