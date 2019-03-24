import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Filled from '../components/Filled';
import Grid from '../components/Grid';
import Carousel from '../components/Carousel';
import styles from '../utils/css';
import Note from './Note';
import paellaImg from './assets/circle-foods/paella.png';
import cinnamonrollImg from './assets/circle-foods/cinnamonroll.png';
import donutImg from './assets/circle-foods/donut.png';
import onionringImg from './assets/circle-foods/onionring.png';
import pieImg from './assets/circle-foods/pie.png';
import veggieplatterImg from './assets/circle-foods/veggieplatter.png';
import bagelImg from './assets/circle-foods/bagel.png';
import cookieImg from './assets/circle-foods/cookie.png';
import eggImg from './assets/circle-foods/egg.png';
import orangeImg from './assets/circle-foods/orange.png';
import pizzaImg from './assets/circle-foods/pizza.png';
import waffleImg from './assets/circle-foods/waffle.png';
import burgerImg from './assets/circle-foods/burger.png';
import crackerImg from './assets/circle-foods/cracker.png';
import lemonImg from './assets/circle-foods/lemon.png';
import pancakeImg from './assets/circle-foods/pancake.png';
import sushiImg from './assets/circle-foods/sushi.png';
import watermelonImg from './assets/circle-foods/watermelon.png';
import './assets/circle-foods.css';
import snackalongLogoImage from './assets/snackalong-logo.svg';

const SpinningSnack = ({ image, className }) => {
  return (
    <div className={className}>
      <img className="o-fit-contain scale90p w100p h100p" src={image} />
    </div>
  );
};
const SnackalongLogo = () => (
  <div className="absolute w100p h100p z2">
    <img className="w100p h100p o-fit-contain" src={snackalongLogoImage} />
  </div>
);

const Branding = ({ className }) => {
  return (
    <Grid className={className}>
      <div className="col-6 relative">
        <Carousel
          aspectRatio={styles('aspect-ratio--4x3')}
          showArrows={false}
          showDots={false}
          autoAdvanceInterval={10000}
          childClassNames={styles('w100p h100p rotate-360')}
          overlayComponent={SnackalongLogo}
        >
          <SpinningSnack image={donutImg} />
          <SpinningSnack image={paellaImg} />
          <SpinningSnack image={cinnamonrollImg} />
          <SpinningSnack image={onionringImg} />
          <SpinningSnack image={pieImg} />
          <SpinningSnack image={veggieplatterImg} />
          <SpinningSnack image={bagelImg} />
          <SpinningSnack image={cookieImg} />
          <SpinningSnack image={eggImg} />
          <SpinningSnack image={orangeImg} />
          <SpinningSnack image={pizzaImg} />
          <SpinningSnack image={waffleImg} />
          <SpinningSnack image={burgerImg} />
          <SpinningSnack image={crackerImg} />
          <SpinningSnack image={lemonImg} />
          <SpinningSnack image={pancakeImg} />
          <SpinningSnack image={sushiImg} />
          <SpinningSnack image={watermelonImg} />
        </Carousel>
      </div>
      <Filled className="col-4">
        <Heading kind="bigfreedia" className="mb4">
          Flexible event branding
        </Heading>
        <Paragraph kind="reuben" className="mb4">
          A simple logo that works by itself, but comes alive when the shape is
          filled with food. After realizing how many foods are round, it seemed
          only natural to create a space in which food can be shown with the
          brand stretched across the surface.
        </Paragraph>
        <Paragraph kind="reuben" className="mb4">
          The typography is a nod to the o.g. food & film combo: 1950’s movie
          drive-in signage. The rounded terminals suggest a hand painted/drawn
          feeling to match with the event’s DIY nature.
        </Paragraph>
        <Note direction="rightAbove">
          Look at all that tasty, spinning food! Spin right into my mouth, baby.
        </Note>
      </Filled>
    </Grid>
  );
};

export default Branding;
