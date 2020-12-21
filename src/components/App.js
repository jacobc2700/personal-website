import React from 'react';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import { useState } from 'react';

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
