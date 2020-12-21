import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
