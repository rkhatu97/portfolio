import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import { useWindowScroll } from 'react-use';
import ArrowUp from './images/arrow-up.svg';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.scss';

function App() {
  const { y: pageYOffset } = useWindowScroll();
  const [scrollBtnVisible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 200) {
      setVisibility(true)
    } else {
      setVisibility(false);
    }
  }, [pageYOffset])

  function onScrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="App">
      <div className="container-wrap">
        <Sidebar />
        <div className="components-container">
          <Home />
          <About />
          <Work />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </div>
      </div>
      {
        scrollBtnVisible && (
          <div className="scroll-up" onClick={_ => onScrollTop()}>
            <img src={ArrowUp} alt="scroll-up" />
          </div>
        )
      }
    </div>
  );
}

export default App;
