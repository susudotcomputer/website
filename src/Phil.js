import React from 'react';
import philGif from './assets/phil.gif';

const Phil = () => {
  return (
    <div className="w100vw h100vh">
      <img className="o-fit-cover w100p h100p" src={philGif} />
    </div>
  );
};

export default Phil;
