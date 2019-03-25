import React from 'react';
import Snack from './Snack';
import image from './assets/01-nachos-photo.jpg';
import neonImage from './assets/01-nachos-min.png';

const Nachos = () => (
  <Snack
    title="Cheese Nachos"
    index="01"
    timeStamp="0:05:12"
    kind="Food"
    kindList={['Shredded cheese', 'Tortilla chips']}
    vesselList={['Red paper tray']}
    clip="https://s3.amazonaws.com/susuassets/01-nachos.mp4"
    clipPosition={'left'}
    image={image}
    neonImage={neonImage}
  />
);

export default Nachos;
