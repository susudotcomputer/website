import React from 'react';
import Snack from './Snack';
import image from './assets/11-martini-photo.jpg';
import neonImage from './assets/11-martini-min.png';

const Martini = () => (
  <Snack
    title="Martini"
    index="11"
    timeStamp="0:25:57"
    kind="Drink"
    kindList={['Gin martini']}
    vesselList={['That glass']}
    clip="https://s3.amazonaws.com/susuassets/11-martini.mp4"
    clipPosition={'left'}
    image={image}
    neonImage={neonImage}
  />
);

export default Martini;
