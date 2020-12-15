import React from 'react';
import { useState } from 'react';
import Splash from './components/SplashScreen';
import { ThemeProvider } from 'styled-components';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './scss/style.scss';
import './scss/lightStyle.scss';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className='App'>
      <div className='test'>
        <Landing theme={theme} setTheme={setTheme}></Landing>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
    // <ThemeProvider theme={themes[theme]}>
    //   <Splash theme={theme} setTheme={setTheme}></Splash>
    // </ThemeProvider>
  );
};

export default App;
