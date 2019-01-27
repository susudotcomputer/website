import React, { Component } from 'react';
import Home from './Home';
import Snackalong from './snackalong/Snackalong';
import Sundays from './projects/Sundays';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Snackalong path="/snackalong" />
        <Sundays path="/sundays" />
      </Router>
    );
  }
}

export default App;
