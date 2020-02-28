import React from "react";
import Filled from "../components/Filled";
import { Paragraph, Heading } from "../components/Text";
import Grid from "../components/Grid";
import Carousel from "../components/Carousel";

import img1 from "./assets/poster/movie-poster1.jpg";
import img2 from "./assets/poster/movie-poster2.jpg";
import img3 from "./assets/poster/movie-poster3.jpg";
import styles from "../utils/css";
import { useIntersectionObserver } from "../hooks/useObserver";

const Poster = ({ className }) => {
  const { targetRef, didIntersect } = useIntersectionObserver();
  return (
    <Grid className={className}>
      <Filled className="col-10 col-4-md">
        <Heading kind="bigfreedia" className="mb4">
          A new movie poster
        </Heading>
        <Paragraph kind="danny" className="mb4">
          This was one of the first pieces of collateral we made and it created
          the aesthetic and level of detail that would permeate each decision.
        </Paragraph>
        <Paragraph kind="danny" className="mb4">
          It is the moment between at the end of a poker game where you “show
          your cards.” The amount of cards is pulled from when Rusty is teaching
          the 90’s bratpack how to play cards and says, “You can’t have six
          cards in a five card game.” The background blue felt is pulled from
          the table they were playing on in that scene.
        </Paragraph>
        <Paragraph kind="danny" className="mb4">
          Abstractly when you look at the layout, the movie’s title is created
          with the two columns of cards forming an 11. Instead of face cards, we
          show food that will be served throughout the film, all in neon to
          represent Vegas’ bright nights.
        </Paragraph>
        <Paragraph kind="danny" className="mb4">
          The quote at the bottom is said by Ocean when he meets Linus for the
          first time and we found ourselves using it as a mantra for this
          project and ended up using it in various collateral.
        </Paragraph>
      </Filled>
      <div
        ref={targetRef}
        className="col-10 col-8-sm col-offset-1-sm col-offset-5-md col-5-md"
      >
        <Carousel
          wrapperClassNames={styles("")}
          aspectRatio={styles("aspect-ratio--2x3")}
        >
          <img src={didIntersect ? img1 : ""} />
          <img src={didIntersect ? img2 : ""} />
          <img src={didIntersect ? img3 : ""} />
        </Carousel>
      </div>
    </Grid>
  );
};

export default Poster;
