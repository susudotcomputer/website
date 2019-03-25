import React from 'react';
import Snack from './Snack';
import image from './assets/06-espresso-photo.jpg';
import neonImage from './assets/06-espresso-min.png';

const Espresso = () => (
  <Snack
    title="Espresso & Treat"
    index="06"
    timeStamp="0:20:19"
    kind="Combo"
    kindList={['Espresso', 'Slice of Banana Bread']}
    vesselList={['Espresso cup', 'Plate']}
    clip="https://s3.amazonaws.com/susuassets/06-espresso.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
  />
);

export default Espresso;
