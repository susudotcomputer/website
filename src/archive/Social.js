import React from "react";
import Grid from "../components/Grid";
import Filled from "../components/Filled";
import styles from "../utils/css";
import { Heading, Paragraph } from "../components/Text";
import { Button } from "../components/Buttons";
import SVG from "react-inlinesvg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

export const Social = () => {
  return (
    <Grid className="py20">
      <Filled
        className={styles(
          "col-10 col-8-sm col-offset-1-sm col-4-md col-offset-1-md"
        )}
      >
        <Heading kind="bigfreedia" className="mb2">
          Keep up with us in other places
        </Heading>
        <Paragraph kind="danny" className="mb5">
          We know you already have more than enough people/places/things/ideas
          to follow on social media. So trust us when we say: SuSu will never
          become an influencer. There is no SuSu Flat Tummy Tea and no SuSu
          Music Festival on an island... I mean hell, I bet we’ll nearly never
          post. But, when we have a new project to show it will be on social
          first. SO SMASH DAT FOLLOW BUTTON.
        </Paragraph>
      </Filled>
      <div className="col-8 col-offset-1 col-6-sm col-offset-2-sm col-3-md col-offset-6-md mb3 flex flex-column justify-center">
        <Button
          href="https://instagram.com/susudotcomputer"
          className="relative flex items-center justify-center pl4 pr5 mb5 w100p"
          size="medium"
          color="black"
        >
          <SVG
            className="fill-white hov-item-fill-black w30px h30px mr2 inline-block"
            src={instagram}
          />
          Follow SuSu on Instagram
        </Button>
        <Button
          href="mailto:email@susu.computer"
          className="relative flex items-center justify-center pl4 pr5 w100p"
          size="medium"
          color="black"
        >
          <SVG
            className="fill-white hov-item-fill-black w30px h30px mr2 inline-block"
            src={twitter}
          />
          Follow SuSu on Twitter
        </Button>
      </div>
    </Grid>
  );
};
