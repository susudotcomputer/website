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
      <Filled className={styles("col-10 col-6-sm col-offset-2-sm")}>
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
      <div className="col-10 col-6-sm col-offset-2-sm col-6-lg col-offset-2-lg flex flex-column flex-row-md justify-around items-start-md mb3">
        <Button
          href="https://instagram.com/susudotcomputer"
          className="relative flex items-center pl4 pr5 mb5 mb0-lg justify-center"
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
          className="relative flex items-center pl4 pr5 justify-center"
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
