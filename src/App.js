import React, { Component } from 'react';
import './App.css';
import BombGame from './BombGame'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BombGame></BombGame>
      </div>
    );
  }
}

export default App;
