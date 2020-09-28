import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from "./components/header/Header";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
