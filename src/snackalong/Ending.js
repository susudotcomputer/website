import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';
import Button from '../components/Buttons';
import castImage from '../assets/oceans-cast-transparent.png';

const Ending = () => {
  return (
    <>
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
          <Button>Concact Us</Button>
        </div>
      </Grid>
      <div className="relative">
        <div className="absolute w100p t0 r0 b0 l0 z-1">
          {/* <Grid className="h100p" /> */}
          <div className="max-w1200px bg-gridient h100p mx-auto" />
        </div>
        <img src={castImage} />
      </div>
    </>
  );
};

export default Ending;
