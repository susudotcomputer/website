import React from 'react';
import Grid from '../components/Grid';
import styles from '../utils/css';
import speckles from '../assets/speckled_30.png';

const Speckled = ({ className, children }) => {
  const classes = styles(className, 'bg-archive-beige bg-repeat pt15vh');
  return (
    <div className={classes} style={{ backgroundImage: `url(${speckles})` }}>
      <Grid lines={false}>{children}</Grid>
    </div>
  );
};

export default Speckled;
