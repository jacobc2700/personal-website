import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Blog from './components/Blog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={App} />
      <Route exact path='/blog' component={Blog} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
