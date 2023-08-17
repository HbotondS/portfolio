import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { GoUp } from "./components/go-up/GoUp";
import { Footer } from "./components/Footer";

function App(props) {
    const [ shouldShow, setShouldShow ] = useState(false);
    const [ theme, setTheme ] = useState('dark');
    const [ activeRef, setActiveRef ] = useState('');

    const trackScrollingFn = () => {
      const homeComp = document.getElementById('aboutme');
      if (homeComp.getBoundingClientRect().top <= window.innerHeight / 2) {
          setShouldShow(true);
      } else {
          setShouldShow(false);
      }
    };

    document.addEventListener('scroll', trackScrollingFn);

    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (<>
      <Header theme={ theme } switchTheme={switchTheme} activeRef={ activeRef }/>
      <Home onVisible={() => setActiveRef('home')}/>
      <AboutMe onVisible={() => setActiveRef('aboutme')}/>
      <Projects onVisible={() => setActiveRef('projects')}/>
      <Experience onVisible={() => setActiveRef('experience')}/>
      <Footer/>
      <div>
        {shouldShow && <GoUp/>}
      </div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
