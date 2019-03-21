import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/GingerAleSVG';
import image from './assets/14-gingerale-photo.jpg';
import neonImage from './assets/14-gingerale-min.png';

const GingerAle = () => (
  <Snack
    title="Ginger ale"
    index="14"
    timeStamp="0:42:34"
    kind="Drink"
    kindList={['Ginger ale']}
    vesselList={['Wine glass', 'Black straw']}
    clip="https://s3.amazonaws.com/susuassets/14-gingerale.mp4"
    clipPosition={'right'}
    image={image}
    neonImage={neonImage}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default GingerAle;
