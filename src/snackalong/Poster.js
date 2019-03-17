import React from 'react';
import Filled from '../components/Filled';
import { Paragraph, Heading } from '../components/Text';
import Grid from '../components/Grid';
import Carousel from '../components/Carousel';

import img1 from '../components/assets/carousel-1.jpg';
import img2 from '../components/assets/carousel-2.jpg';
import img3 from '../components/assets/carousel-3.jpg';
import styles from '../utils/css';

const Poster = ({ className }) => {
  return (
    <Grid className={className}>
      <Filled className="col-4">
        <Heading kind="bigfreedia" className="mb4">
          A new movie poster
        </Heading>
        <Paragraph kind="reuben" className="mb4">
          This was one of the first pieces of collateral we made for the event
          and it set the tone for the aesthetic and level of detail that would
          permeate each decision.
        </Paragraph>
        <Paragraph kind="reuben" className="mb4">
          The design is a symbolic moment of “showing your hand” between Ocean
          and Benedict—Danny’s hand is winning with a royal straight. Abstractly
          when you look at the layout, the movie’s title is created with the two
          columns of cards forming an 11. Instead of face cards, we show food
          that will be served throughout the film, all in the aesthetic of neon
          to represent Vegas’ bright nights.
        </Paragraph>
        <Paragraph kind="reuben" className="mb4">
          The amount of cards in the layout is pulled from a line within the
          movie. When Rusty is teaching the 90’s bratpack how to play cards he
          says, “you can’t have six cards in a five card game.” Even the
          background blue felt is pulled from the table they were playing on in
          that scene.
        </Paragraph>
        <Paragraph kind="reuben" className="mb4">
          The quote at the bottom is said by Ocean when he meets Linus for the
          first time and we found ourselves using it as a mantra for this
          project and ended up using it in various collateral.
        </Paragraph>
      </Filled>
      <div className="col-offset-5 col-5 px10">
        <Carousel aspectRatio={styles('aspect-ratio--2x3')}>
          <img src={img2} />
          <img src={img1} />
          <img src={img3} />
        </Carousel>
      </div>
    </Grid>
  );
};

export default Poster;
