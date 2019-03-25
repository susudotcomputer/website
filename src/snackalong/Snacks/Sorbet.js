import React from 'react';
import Snack from './Snack';
import image from './assets/10-sorbet-photo.jpg';
import neonImage from './assets/10-sorbet-min.png';

const Sorbet = () => (
  <Snack
    title="Sorbet"
    index="10"
    timeStamp="0:24:36"
    kind="Food"
    kindList={['Raspberry sorbet', 'Mango sorbet']}
    vesselList={['Plastic cup', 'Plastic spoon']}
    clip="https://s3.amazonaws.com/susuassets/10-sorbet.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
  />
);

export default Sorbet;
