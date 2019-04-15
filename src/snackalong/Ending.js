import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';
import Button from '../components/Buttons';
import castImage from '../assets/oceans-cast-transparent.png';
import balloons from './assets/balloons.png';
import bff from './assets/bff.jpg';
import email from './assets/email.svg';
import SVG from 'react-inlinesvg';
import Note from './Note';
import Filled from '../components/Filled';

const Ending = () => {
  return (
    <>
      <Grid className="pt10">
        <div className="col-offset-2 col-4 p2 bg-archive-beige lh0 rotate-3 mb-35p">
          <img src={bff} />
        </div>
        <div className="col-3 pt20">
          <Note>
            This is the one photo we have of us from the night. Two handsome
            boys&nbsp;in&nbsp;SuSuits.
          </Note>
        </div>
      </Grid>
      <div className="relative">
        <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
          <div className="max-w1200px bg-gridient h100p mx-auto" />
        </div>
        <div className="mx-auto max-w1400px lh0">
          <img className="" src={balloons} />
        </div>
      </div>
      <Grid className="py20">
        <Filled className="col-10 col-6-sm col-offset-2-sm mb10">
          <Heading kind="bigfreedia" className="mb2">
            Have any questions/comments?
          </Heading>
          <Paragraph kind="danny" className="mb4">
            Wow, you got to the very very very end of this site. Thank you! If
            you wanna reach out and say hey… please do! We love hearing from
            folks.
          </Paragraph>
        </Filled>
        <div className="col-6 col-offset-2 flex justify-center mb3">
          <Button className="relative px10" size="medium">
            <SVG
              className="fill-archive-brown-900 w40px h40px inline-block l2 t-3 absolute"
              src={email}
            />
            Follow on Instagram
          </Button>
          <Button className="relative px10" size="medium">
            <SVG
              className="fill-archive-brown-900 w40px h40px inline-block l2 t-3 absolute"
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

      <div className="relative">
        <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
          <div className="max-w1200px bg-gridient h100p mx-auto " />
        </div>
        <div className="lh0">
          <img className="w100p" src={castImage} />
        </div>
      </div>
    </>
  );
};

export default Ending;
