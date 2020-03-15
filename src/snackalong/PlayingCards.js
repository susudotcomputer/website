import React from "react";
import Grid from "../components/Grid";
import { Heading, Paragraph, Em, Link } from "../components/Text";
import Note from "./Note";
import Carousel from "../components/Carousel";
import styles from "../utils/css";
import { useIntersectionObserver } from "../hooks/useObserver";
import danny from "./assets/playing-cards-danny.png";
import rusty from "./assets/playing-cards-rusty.png";
import linus from "./assets/playing-cards-linus.png";
import benedict from "./assets/playing-cards-benedict.png";

const RatioBox = ({ children, className, aspectRatio }) => {
  const child = React.Children.only(children);
  const childrenWithOnClick = React.cloneElement(child, {
    className: styles(child.props.className, "aspect-ratio__object")
  });

  return (
    <div className={className}>
      <div className={`${aspectRatio} aspect-ratio`}>{childrenWithOnClick}</div>
    </div>
  );
};

export const PlayingCards = () => {
  const { targetRef, didIntersect } = useIntersectionObserver();
  const playingCardClasses = styles(
    "w100p h100p o-fit-cover rounded-large clip"
  );
  return (
    <div ref={targetRef} className="bg-archive-brown-900 py10">
      <Grid lines={false} className="archive-beige">
        <div className="col-10 col-4-sm col-offset-3-lg col-4-lg self-center">
          <Heading kind="bigfreedia" className="mb4">
            Those cards tho!
          </Heading>
          <Paragraph kind="danny" className="mb8 lh24px">
            We showed you the cards from the gift pack already...{" "}
            <Em>but they’re so good</Em> that we want to show them again. The
            incredible{" "}
            <Link kind="danny" bold href="https://elihorne.com" color="beige">
              Natasha Fedorova
            </Link>{" "}
            illustrated them.
          </Paragraph>
        </div>
        <div className="col-10 col-5-sm col-offset-5-sm col-offset-0-lg col-10-lg playing-cards-grid">
          <RatioBox aspectRatio={styles("aspect-ratio--8x11")}>
            <img
              className={playingCardClasses}
              src={didIntersect ? danny : ""}
            />
          </RatioBox>
          <RatioBox aspectRatio={styles("aspect-ratio--8x11")}>
            <img
              className={playingCardClasses}
              src={didIntersect ? rusty : ""}
            />
          </RatioBox>
          <RatioBox aspectRatio={styles("aspect-ratio--8x11")}>
            <img
              className={playingCardClasses}
              src={didIntersect ? linus : ""}
            />
          </RatioBox>

          <RatioBox aspectRatio={styles("aspect-ratio--8x11")}>
            <img
              className={playingCardClasses}
              src={didIntersect ? benedict : ""}
            />
          </RatioBox>
        </div>
      </Grid>
    </div>
  );
};
