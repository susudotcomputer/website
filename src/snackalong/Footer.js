import React from "react";
import { Paragraph } from "../components/Text";
import Grid from "../components/Grid";
import Speckled from "../components/Speckled";

const Footer = () => {
  return (
    <div className="bg-archive-brown-900 pt10 pb10 border2px border-top border-archive-brown-900">
      <Grid lines={false}>
        <div className="col-10 col-6-sm col-offset-2-sm h92px mb20 children-bg-archive-brown-900">
          <Speckled className="p1 h92px">
            <iframe
              src="https://open.spotify.com/embed/track/3Vo5NwAezmRMP2aH2xQVm1"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="encrypted-media"
            />
          </Speckled>
        </div>
        <Paragraph
          kind="danny"
          className="archive-beige col-10 col-8-md col-offset-1-md text-center mx-auto lh20px mb4"
        >
          &copy; SuSu {new Date().getFullYear()}. All rights reserved.*
        </Paragraph>
        <Paragraph
          kind="danny"
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
