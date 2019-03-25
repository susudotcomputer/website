import React from 'react';
import Snack from './Snack';
import image from './assets/18-jellybeans-photo.jpg';
import neonImage from './assets/18-jellybeans-min.png';

const Jellybeans = () => (
  <Snack
    title="Jelly beans"
    index="09"
    timeStamp="1:04:04"
    kind="Food"
    kindList={['Assorted jelly beans']}
    vesselList={['Glass bowl']}
    clip="https://s3.amazonaws.com/susuassets/18-jellybeans.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
  />
);

export default Jellybeans;
