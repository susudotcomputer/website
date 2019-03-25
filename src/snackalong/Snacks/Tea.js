import React from 'react';
import Snack from './Snack';
import image from './assets/04-tea-photo.jpg';
import neonImage from './assets/04-tea-min.png';

const Tea = () => (
  <Snack
    title="Tea"
    index="04"
    timeStamp="0:11:56"
    kind="Drink"
    kindList={['English Breakfast Tea']}
    vesselList={['Strawberry Hill, Syracuse cup']}
    clip="https://s3.amazonaws.com/susuassets/04-tea.mp4"
    clipPosition={'right'}
    image={image}
    neonImage={neonImage}
  />
);

export default Tea;
