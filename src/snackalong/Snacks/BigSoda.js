import React from 'react';
import Snack from './Snack';
import image from './assets/08-bigsoda-photo.jpg';
import neonImage from './assets/08-bigsoda-min.png';

const BigSoda = () => (
  <Snack
    title="Big Soda"
    index="08"
    timeStamp="0:22:59"
    kind="Drink"
    kindList={['Coke']}
    vesselList={['Custom cup']}
    clip="https://s3.amazonaws.com/susuassets/08-bigsoda.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
  />
);

export default BigSoda;
