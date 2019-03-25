import React from 'react';
import Snack from './Snack';
import image from './assets/07-cigarette-photo.jpg';
import neonImage from './assets/07-cigarette-min.png';

const Cigarette = () => (
  <Snack
    title="Cigarette"
    index="07"
    timeStamp="0:21:24"
    kind="Food"
    kindList={['Cigarette']}
    vesselList={['Hand']}
    clip="https://s3.amazonaws.com/susuassets/07-cigarette.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
  />
);

export default Cigarette;
