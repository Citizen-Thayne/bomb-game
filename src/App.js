import React, { Component } from 'react';
import './App.css';
import BombGameContainer from './containers/BombGameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BombGameContainer></BombGameContainer>
      </div>
    );
  }
}

export default App;
