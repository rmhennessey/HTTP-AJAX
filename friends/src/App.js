import React, { Component } from 'react';
// import { BrowserRouter as Route } from 'react-router-dom';
import Friends from './components/Friends';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
