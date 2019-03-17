import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Filled from '../components/Filled';
import Grid from '../components/Grid';
import Carousel from '../components/Carousel';
import styles from '../utils/css';
import Note from './Note';
import img1 from '../components/assets/carousel-1.jpg';
import img2 from '../components/assets/carousel-2.jpg';
import img3 from '../components/assets/carousel-3.jpg';

const Branding = ({ className }) => {
  return (
    <Grid className={className}>
      <div className="col-6">
        <Carousel
          aspectRatio={styles('aspect-ratio--4x3')}
          showArrows={false}
          showDots={false}
          autoAdvanceInterval={10000}
        >
          <img src={img2} />
          <img src={img1} />
          <img src={img3} />
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
