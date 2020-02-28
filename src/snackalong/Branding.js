import React from "react";
import { Heading, Paragraph } from "../components/Text";
import Filled from "../components/Filled";
import Grid from "../components/Grid";
import Carousel from "../components/Carousel";
import styles from "../utils/css";
import Note from "./Note";
import paellaImg from "./assets/circle-foods/paella.png";
import cinnamonrollImg from "./assets/circle-foods/cinnamonroll.png";
import donutImg from "./assets/circle-foods/donut.png";
import onionringImg from "./assets/circle-foods/onionring.png";
import pieImg from "./assets/circle-foods/pie.png";
import veggieplatterImg from "./assets/circle-foods/veggieplatter.png";
import cookieImg from "./assets/circle-foods/cookie.png";
import eggImg from "./assets/circle-foods/egg.png";
import orangeImg from "./assets/circle-foods/orange.png";
import pizzaImg from "./assets/circle-foods/pizza.png";
import waffleImg from "./assets/circle-foods/waffle.png";
import burgerImg from "./assets/circle-foods/burger.png";
import pancakeImg from "./assets/circle-foods/pancake.png";
import sushiImg from "./assets/circle-foods/sushi.png";
import "./assets/circle-foods.css";
import snackalongLogoImage from "./assets/snackalong-logo.svg";
import { useIntersectionObserver } from "../hooks/useObserver";

const SpinningSnack = ({ image, className, didIntersect }) => {
  return (
    <div className={className}>
      <img
        className="o-fit-contain scale90p w100p h100p"
        src={didIntersect ? image : ""}
      />
    </div>
  );
};
const SnackalongLogo = () => (
  <div className="absolute w100p h100p z2">
    <img className="w100p h100p o-fit-contain" src={snackalongLogoImage} />
  </div>
);

const Branding = ({ className }) => {
  const { targetRef, didIntersect } = useIntersectionObserver({
    rootMargin: "50%"
  });
  return (
    <Grid className={className}>
      <div ref={targetRef} className="col-10 col-6-md relative">
        <Carousel
          aspectRatio={styles("aspect-ratio--4x3")}
          showArrows={false}
          showDots={false}
          autoAdvanceInterval={5000}
          childClassNames={styles("w100p h100p snack-rotate-360")}
          overlayComponent={SnackalongLogo}
          wrapperClassNames={styles("max-w500px max-w-none-md mx-auto")}
        >
          <SpinningSnack didIntersect={didIntersect} image={donutImg} />
          <SpinningSnack didIntersect={didIntersect} image={paellaImg} />
          <SpinningSnack didIntersect={didIntersect} image={cinnamonrollImg} />
          <SpinningSnack didIntersect={didIntersect} image={onionringImg} />
          <SpinningSnack didIntersect={didIntersect} image={pieImg} />
          <SpinningSnack didIntersect={didIntersect} image={veggieplatterImg} />
          <SpinningSnack didIntersect={didIntersect} image={cookieImg} />
          <SpinningSnack didIntersect={didIntersect} image={eggImg} />
          <SpinningSnack didIntersect={didIntersect} image={orangeImg} />
          <SpinningSnack didIntersect={didIntersect} image={pizzaImg} />
          <SpinningSnack didIntersect={didIntersect} image={waffleImg} />
          <SpinningSnack didIntersect={didIntersect} image={burgerImg} />
          <SpinningSnack didIntersect={didIntersect} image={pancakeImg} />
          <SpinningSnack didIntersect={didIntersect} image={sushiImg} />
        </Carousel>
      </div>
      <Filled className="col-10 col-4-md order-1 order-0-md">
        <Heading kind="bigfreedia" className="mb4">
          Event branding
        </Heading>
        <Paragraph kind="danny" className="mb4">
          After realizing how many foods are round, it seemed only natural to
          create a logo that comes alive when the shape is filled with food. The
          typography is a nod to the o.g. food & film combo: 1950’s movie
          drive-in signage. The rounded terminals suggest a handdrawn feeling to
          match with the event’s DIY nature.
        </Paragraph>
        <Note direction="leftUp">Look at all that tasty, spinning food!</Note>
      </Filled>
    </Grid>
  );
};

export default Branding;
