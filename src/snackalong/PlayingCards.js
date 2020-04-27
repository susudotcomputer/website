import React from "react";
import Grid from "../components/Grid";
import { Heading, Paragraph, Em, TextLink } from "../components/Text";
import styles from "../utils/css";
import { useIntersectionObserver } from "../hooks/useObserver";
import danny from "./assets/playing-cards-danny.png";
import rusty from "./assets/playing-cards-rusty.png";
import linus from "./assets/playing-cards-linus.png";
import benedict from "./assets/playing-cards-benedict.png";

const RatioBox = ({ children, className, aspectRatio, style }) => {
  const child = React.Children.only(children);
  const childrenWithAspectRatio = React.cloneElement(child, {
    className: styles(child.props.className, "aspect-ratio__object"),
  });

  return (
    <div style={style} className={className}>
      <div className={`${aspectRatio} aspect-ratio`}>
        {childrenWithAspectRatio}
      </div>
    </div>
  );
};

const getRandomBetweenRange = (min, max, precision = 2) =>
  (Math.random() * (min - max) + max).toFixed(precision);

export const PlayingCards = () => {
  const { targetRef, didIntersect } = useIntersectionObserver();
  const playingCardClasses = styles(
    "w100p h100p o-fit-cover rounded-large clip"
  );
  return (
    <div ref={targetRef} className="bg-archive-brown-900 py10">
      <Grid lines={false} className="archive-beige">
        <div className="col-10 col-4-sm col-offset-3-lg col-4-lg self-center">
          <Heading kind="bigfreedia" className="mb2 mb4-sm">
            Those cards tho!
          </Heading>
          <Paragraph kind="danny" className="mb8 lh24px">
            We showed you the cards from the gift pack already...{" "}
            <Em>but they’re so good</Em> that we want to show them again. The
            incredible{" "}
            <TextLink
              kind="danny"
              bold
              href="http://natasha-fedorova.com/"
              target="_blank"
              color="beige"
            >
              Natasha Fedorova
            </TextLink>{" "}
            illustrated them.
          </Paragraph>
        </div>
        <div className="col-10 col-5-sm col-offset-5-sm col-offset-0-lg col-10-lg playing-cards-grid">
          {[danny, rusty, linus, benedict].map((card, i) => {
            const rotation = getRandomBetweenRange(-0.5, 1.5);
            const vertical = getRandomBetweenRange(-5, 5);
            return (
              <RatioBox
                key={`card-${i}`}
                aspectRatio={styles("aspect-ratio--8x11")}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  top: `${vertical}px`,
                }}
              >
                <img
                  className={playingCardClasses}
                  src={didIntersect ? card : ""}
                />
              </RatioBox>
            );
          })}
        </div>
      </Grid>
    </div>
  );
};
