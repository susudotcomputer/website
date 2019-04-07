import React from 'react';
import { Paragraph } from '../components/Text';

const Footer = () => {
  return (
    <div className="bg-archive-brown-900 pt6 pb10">
      <div className="max-w600px mx-auto h80px mb10">
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
        className="archive-beige max-w600px text-center mx-auto lh20px"
      >
        &copy; SuSu 2018. All rights reserved. Except all the Oceans Eleven
        images, clips, and stuff. That is SUUUUPER not ours. Probably owned by
        Steven Soderbergh, or Village Roadshow Pictures, or Warner Bros! We love
        the movie so so so much. Please don’t DMCA us, we’re just fans!!
      </Paragraph>
    </div>
  );
};

export default Footer;
