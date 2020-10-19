import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <a
          href='https://github.com/jacobc2700'
          data-tooltip='GitHub'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-github'></i>
        </a>
        <a
          href='https://www.youtube.com/c/Humboo'
          data-tooltip='YouTube'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-youtube-play'></i>
        </a>
        <a
          href='https://twitter.com/realHumboo'
          data-tooltip='Twitter'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-twitter'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/jacob-chang-94a695191/'
          data-tooltip='LinkedIn'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-linkedin'></i>
        </a>
        <a
          href='mailto:jacobchang124@gmail.com'
          data-tooltip='Gmail'
          data-tooltip-location='top'
        >
          <i className='footer-icon fa fa-envelope'></i>
        </a>
        <a
          href='https://medium.com/@jacobchang124'
          data-tooltip='Medium'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-medium'></i>
        </a>

        <p className='footer-text'>Designed by Jacob</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
