import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/BurgerSVG';
import image from './assets/19-burger.jpg';

const Burger = () => (
  <Snack
    title="Burger"
    index="19"
    timeStamp="1:49:20"
    kind="Food"
    kindList={['Burger']}
    vesselList={['Paper']}
    clip="https://s3.amazonaws.com/susuassets/19-cheeseburger.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Burger;
