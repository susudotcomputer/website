import React from "react";
import { Heading, Paragraph } from "../components/Text";
import { Button } from "../components/Buttons";
import email from "../assets/email.svg";
import instagram from "../assets/instagram.svg";
import SVG from "react-inlinesvg";
import Filled from "../components/Filled";
import Note from "./Note";
import Grid from "../components/Grid";
import styles from "../utils/css";
import { textGapBottom } from "../constants";

const QuestionsComments = ({ className }) => {
  return (
    <Grid className={className}>
      <Filled
        className={styles("col-10 col-6-sm col-offset-2-sm", textGapBottom)}
      >
        <Heading kind="bigfreedia" className="mb2">
          Have any questions / comments?
        </Heading>
        <Paragraph kind="danny">
          Wow, you got to the very very very end of this site. Thank you! If you
          wanna reach out and say hey… please do! We love hearing from folks.
        </Paragraph>
      </Filled>
      <div className="col-10 col-6-sm col-offset-2-sm col-6-lg col-offset-2-lg flex flex-column flex-row-md justify-around items-start-md mb3">
        <Button
          href="https://instagram.com/susudotcomputer"
          className="relative flex items-center pl4 pr5 mb5 mb0-lg justify-center"
          size="medium"
        >
          <SVG
            className="fill-archive-brown-900 hov-item-fill-archive-beige w30px h30px mr2 inline-block"
            src={instagram}
          />
          Follow on Instagram
        </Button>
        <Button
          href="mailto:email@susu.computer"
          className="relative flex items-center pl4 pr5 justify-center"
          size="medium"
        >
          <SVG
            className="fill-archive-brown-900 hov-item-fill-archive-beige w30px h30px mr2 inline-block"
            src={email}
          />
          Say hello via email
        </Button>
      </div>
      <div className="col-3 col-offset-1">
        <Note direction="leftAbove">
          If you know Steven Soderbergh can you DM us immediately!
        </Note>
      </div>
    </Grid>
  );
};

export default QuestionsComments;
