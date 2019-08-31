import React, {Component} from 'react'
import logo from '../logo.svg';
import './App.scss';

import Button from '../components/Button/Button'


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      text:'1',
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Button type={'button'} />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <h1> hi </h1>
        </header>
      </div>
    );
  }
}

export default App;
