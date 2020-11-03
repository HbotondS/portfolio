import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { AboutMe } from "./components/about-me/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { GoUp } from "./components/go-up/GoUp";
import { Footer } from "./components/footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        shouldShow: false
    };
    this.trackScrolling = this.trackScrolling.bind(this);
    document.addEventListener('scroll', this.trackScrolling);
  }

  trackScrolling() {
    const homeComp = document.getElementById('aboutme');
    if (homeComp.getBoundingClientRect().top <= window.innerHeight / 2) {
      this.setState({shouldShow: true});
    } else {
      this.setState({shouldShow: false});
    }
  }

  render() {
    const { shouldShow } = this.state;
    return (
      <div>
        <Header/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Experience/>
        <Footer/>
        <div>
            {shouldShow && <GoUp/>}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
