import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/CottonCandySVG';
import image from './assets/09-cottoncandy-photo.jpg';
import neonImage from './assets/09-cottoncandy-min.png';

const CottonCandy = () => (
  <Snack
    title="CottonCandy"
    index="09"
    timeStamp="0:23:10"
    kind="Food"
    kindList={['Cotton candy']}
    vesselList={['Plastic bag']}
    clip="https://s3.amazonaws.com/susuassets/09-cottoncandy.mp4"
    clipPosition={'right'}
    image={image}
    neonImage={neonImage}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default CottonCandy;
