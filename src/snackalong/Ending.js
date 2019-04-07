import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';
import Button from '../components/Buttons';
import castImage from '../assets/oceans-cast-transparent.png';
import balloons from './assets/balloons.png';
import bff from './assets/bff.jpg';
import email from './assets/email.svg';
import SVG from 'react-inlinesvg';

const Ending = () => {
  return (
    <>
      <Grid className="pt10">
        <div className="col-5 p2 bg-archive-beige lh0 rotate-3 mb-35p">
          <img src={bff} />
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
        <div className="col-6 col-offset-2 text-center mb10">
          <Heading kind="bigfreedia" className="mb2">
            Have any questions/comments?
          </Heading>
          <Paragraph kind="danny" className="mb4">
            Wow, you got to the very very very end of this site. Thank you! If
            you wanna reach out and say hey… please do! We love hearing from
            folks.
          </Paragraph>
        </div>
        <div className="col-6 col-offset-2 flex justify-center">
          <Button className="relative px10" size="medium">
            <SVG
              className="fill-archive-brown-900 w40px h40px inline-block l2 t-3 absolute"
              src={email}
            />
            Contact us
          </Button>
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
