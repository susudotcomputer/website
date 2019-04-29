import React from 'react';
import perforationUp from './assets/perforation-up.svg';
import perforationDown from './assets/perforation-down.svg';
import styles from '../utils/css';

const Perforation = ({ direction }) => {
  const classes = {
    up: styles('t-4px h4px'),
    down: styles('b-5px h5px')
  };
  return (
    <div
      className={styles('absolute l0 w100p', classes[direction])}
      style={{
        backgroundImage: `url(${
          direction === 'up' ? perforationUp : perforationDown
        })`,
        backgroundSize: '16px'
      }}
    />
  );
};

export default Perforation;
