import React from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './scss/style.scss';

const App = () => {
  return (
    <div className='App'>
      <Landing></Landing>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default App;
