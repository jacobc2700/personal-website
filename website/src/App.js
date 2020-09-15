import React from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';

import './scss/style.scss';

const App = () => {
  return (
    <div className='App'>
      <Landing></Landing>
      <About></About>
    </div>
  );
};

export default App;
