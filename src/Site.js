import React from 'react';
import { Helmet } from 'react-helmet';
import { Router } from '@reach/router';
import Home from './Home';
import Snackalong from './snackalong/Snackalong';
import Sundays from './projects/Sundays';
import './styles/reset.css';

const Site = () => {
  return (
    <div className="sans-serif">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>S U S U</title>
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:900,400"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Share+Tech+Mono"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/battery.css" />
      </Helmet>
      <Router>
        <Home path="/" />
        <Snackalong path="/snackalong" />
        <Sundays path="/sundays" />
      </Router>
    </div>
  );
};

export default Site;
