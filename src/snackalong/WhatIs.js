import React from "react";
import { Paragraph, Heading, Strong, Link, Em } from "../components/Text";
import Grid from "../components/Grid";
import Filled from "../components/Filled";
import Note from "./Note";

const WhatIs = ({ className }) => {
  return (
    <Grid className={className}>
      <div className="col-10 col-2-sm">
        <Note direction="leftBelow">Okay, here we go.</Note>
      </div>
      <Filled className="col-10 col-8-sm col-offset-1-sm col-6-md col-offset-2-md">
        <Heading kind="bigfreedia" className="mb4">
          What is a Snackalong?
        </Heading>
        <Paragraph kind="danny" className="mb4 lh24px">
          You’ve heard of a movie sing-a-long— well, a <Em>Snackalong</Em>™ is
          when you watch a film and eat everything the characters are eating.
          For the inaugural occasion, we chose one of our favorite films:{" "}
          <Em>Ocean’s Eleven</Em>. It was a very thorough night, we prepared all
          19 of Brad Pitt’s items.
        </Paragraph>
        <Paragraph kind="danny" className="mb4">
          <Strong>But Snackalong is more than a meal.</Strong> Snackalong is
          knowing the teacup in the diner scene is a Syracuse China Strawberry
          Hill print. Snackalong is receiving a gift pack with Danny’s wedding
          ring in to match what he gets when released from prison. Snackalong is
          ending the night with our very own fountain scene that{" "}
          <Em>doesn’t come close</Em> to rivaling the Bellagio’s show.
          Snackalong is a joyful and celebratory experience where we obsess over
          every detail in the movie to bring it to life for one special night...
        </Paragraph>
        <Paragraph kind="danny" className="mb4">
          If this sorta thing is your vibe, we encourage you to copy any of this
          and make you own!{" "}
          <a className="weight-600" href="mailto:email@susu.computer">
            Drop us a line
          </a>{" "}
          if you do.
        </Paragraph>
      </Filled>
    </Grid>
  );
};

export default WhatIs;
