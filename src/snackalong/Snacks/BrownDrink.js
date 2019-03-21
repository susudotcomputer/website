import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/BrownDrinkSVG';
import image from './assets/02-browndrink-photo.jpg';
import neonImage from './assets/02-browndrink-min.png';

const BrownDrink = () => (
  <Snack
    title="Brown Drink"
    index="02/03"
    timeStamp="0:06:20 & 0:08:01"
    kind="Drink"
    kindList={['Whiskey (or Rum?)']}
    vesselList={['Tumbler glass']}
    clip="https://s3.amazonaws.com/susuassets/02-browndrink.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default BrownDrink;
