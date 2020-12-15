import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './scss/main.scss';

const App = () => {
  return (
    <div className={'dark'}>
      <div className='App'>
        <Landing></Landing>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
