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

export const PlayingCards = () => {
  const { targetRef, didIntersect } = useIntersectionObserver();
  const playingCardClasses = styles("w100p h100p o-fit-cover");
  return (
    <div ref={targetRef} className="bg-archive-brown-900 py10">
      <Grid lines={false} className="archive-beige">
        <div className="col-10 col-5-sm">
          <Carousel
            wrapperClassNames={styles("")}
            aspectRatio={styles("aspect-ratio--8x11")}
            childWrapperClassName={styles("rounded-large clip")}
          >
            <img
              className={playingCardClasses}
              src={didIntersect ? danny : ""}
            />
            <img
              className={playingCardClasses}
              src={didIntersect ? rusty : ""}
            />
            <img
              className={playingCardClasses}
              src={didIntersect ? linus : ""}
            />
            <img
              className={playingCardClasses}
              src={didIntersect ? benedict : ""}
            />
          </Carousel>
        </div>
        <div className="col-10 col-offset-6-sm col-4-sm">
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
          <div className="">
            <Note direction="rightBelow">
              If you don’t think Benedict is as important as the lead 3, you
              don’t belong here.
            </Note>
          </div>
        </div>
      </Grid>
    </div>
  );
};
