import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/LollipopSVG';
import image from './assets/13-lollipop-photo.jpg';
import neonImage from './assets/13-lollipop-min.png';

const Lollipop = () => (
  <Snack
    title="Lollipop"
    index="13"
    timeStamp="0:35:27"
    kind="Food"
    kindList={['Cherry lollipop']}
    vesselList={['Stick']}
    clip="https://s3.amazonaws.com/susuassets/13-lollipop.mp4"
    clipPosition={'center'}
    image={image}
    neonImage={neonImage}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Lollipop;
