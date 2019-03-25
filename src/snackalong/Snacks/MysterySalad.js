import React from 'react';
import Snack from './Snack';
import image from './assets/12-mysterysalad-photo.jpg';
import neonImage from './assets/12-mysterysalad-min.png';

const MysterySalad = () => (
  <Snack
    title="MysterySalad"
    index="12"
    timeStamp="0:34:53"
    kind="Food"
    kindList={['Cotton candy']}
    vesselList={['Plastic bag']}
    clip="https://s3.amazonaws.com/susuassets/12-mystery-salad.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
  />
);

export default MysterySalad;
