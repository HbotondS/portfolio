import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { AboutMe } from "./components/about-me/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Education } from "./components/education/Education";
import { Work } from "./components/work/Work";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Education/>
        <Work/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
