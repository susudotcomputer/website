import React, { Component } from 'react';
import Home from './Home';
import Snackalong from './snackalong/';
import Sundays from './projects/Sundays';
import Archive from './archive/';
import Phil from './Phil';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Snackalong path="/snackalong" />
        <Sundays path="/sundays" />
        <Archive path="/archive" />
        <Phil path="/phil" />
      </Router>
    );
  }
}

export default App;
