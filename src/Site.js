import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Snackalong from './snackalong/Snackalong';

const Site = () => {
  return (
    <div className="sans-serif">
      <Router>
        <Home path="/" />
        <Snackalong path="/snackalong" />
      </Router>
    </div>
  );
};

export default Site;
