import React from 'react';
import { Paragraph } from '../components/Text';
import Note from './Note';
import Grid from '../components/Grid';

const Footer = () => {
  return (
    <div className="bg-archive-brown-400 pt6 pb10 border2px border-top border-archive-brown-900">
      <Grid lines={false}>
        <Paragraph
          kind="linus"
          className="archive-beige col-10 col-6-md col-offset-2-md text-center mx-auto lh20px"
        >
          &copy; SuSu 2019. All rights reserved. Except all the Oceans Eleven
          images, clips, and stuff. That is SUUUUPER not ours. Probably owned by
          Steven Soderbergh, or Village Roadshow Pictures, or Warner Bros! We
          love the movie so so so much. Please don’t DMCA us, we’re just fans!!
        </Paragraph>
      </Grid>
    </div>
  );
};

export default Footer;
