import React from 'react';
import Snack from './Snack';
import image from './assets/05-nicoisesalad-photo.jpg';
import neonImage from './assets/05-nicoisesalad-min.png';

const NicoiseSalad = () => (
  <Snack
    title="Niçoise Salad"
    index="05"
    timeStamp="0:14:39"
    kind="Food"
    kindList={['Cherry tomatoes', 'Lettuce', 'Red patatoes']}
    vesselList={['Plates']}
    clip="https://s3.amazonaws.com/susuassets/05-nicoisesalad.mp4"
    clipPosition={'right'}
    image={image}
    neonImage={neonImage}
  />
);

export default NicoiseSalad;
