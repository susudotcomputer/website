import React from 'react';
import Snack from './Snack';
import image from './assets/16-redbull-photo.jpg';
import neonImage from './assets/16-redbull-min.png';

const RedBull = () => (
  <Snack
    title="RedBull"
    index="16"
    timeStamp="0:56:27"
    kind="Drink"
    kindList={['Red bull']}
    vesselList={['Can']}
    clip="https://s3.amazonaws.com/susuassets/16-redbull.mp4"
    clipPosition={'right'}
    image={image}
    neonImage={neonImage}
  />
);

export default RedBull;
