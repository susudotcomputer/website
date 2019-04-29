import React from 'react';
import { Paragraph } from '../components/Text';
import Note from './Note';
import Grid from '../components/Grid';

const Footer = () => {
  return (
    <div className="bg-archive-brown-900 pt6 pb10">
      <Grid lines={false}>
        <div className="col-10 col-3-md col-offset-7-md mb-5p mb-10p-md">
          <Note>
            The movie ends with this song, and so does this web page. Bye!
          </Note>
        </div>
        <div className="col-10 col-4-md col-offset-3-md h80px mb10 children-bg-archive-brown-900">
          <iframe
            src="https://open.spotify.com/embed/track/3Vo5NwAezmRMP2aH2xQVm1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="encrypted-media"
          />
        </div>
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
