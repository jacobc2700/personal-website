import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useState } from 'react';

import './scss/main.scss';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={theme ? theme : 'dark'}>
      <div className='App'>
        <Landing theme={theme} setTheme={setTheme}></Landing>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
