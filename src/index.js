import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Header } from "./components/header/Header";
import {ClickMe} from "./components/clickme/ClickMe";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ClickMe/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
