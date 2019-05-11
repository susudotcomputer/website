import React from 'react';
import { Paragraph } from '../components/Text';
import Grid from '../components/Grid';

const Footer = () => {
  return (
    <div className="bg-archive-brown-900 pt14 pb14 border2px border-top border-archive-brown-900">
      <Grid lines={false}>
        <Paragraph
          kind="linus"
          className="archive-beige col-10 col-8-md col-offset-1-md text-center mx-auto lh20px mb4"
        >
          &copy; SuSu 2019. All rights reserved.*
        </Paragraph>
        <Paragraph
          kind="linus"
          className="archive-beige col-10 col-8-md col-offset-1-md text-center mx-auto lh20px mb4"
        >
          *Except all the Oceans Eleven images, clips, and stuff. That is
          SUUUUPER not ours. Probably owned by Steven Soderbergh, or Village
          Roadshow Pictures, or Warner Bros! We love the movie so so so much.
          Please don’t DMCA us, we’re just fans!!
        </Paragraph>
      </Grid>
    </div>
  );
};

export default Footer;
