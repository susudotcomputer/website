import React from 'react';
import Grid from '../components/Grid';
import styles from '../utils/css';
import speckles from '../assets/speckled.png';

const Speckled = ({ className, children, grid = false }) => {
  const classes = styles(className, 'bg-archive-beige bg-repeat');
  return (
    <div
      className={classes}
      style={{ backgroundImage: `url(${speckles})`, backgroundSize: '600px' }}
    >
      {grid ? <Grid lines={false}>{children}</Grid> : children}
    </div>
  );
};

export default Speckled;
