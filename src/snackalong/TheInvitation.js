import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';

const TheInvitation = () => {
  return (
    <Grid className="py20">
      <div className="col-6 col-offset-2 text-center mb10">
        <Heading kind="bigfreedia" className="mb2">
          The Invitation
        </Heading>
        <Paragraph kind="danny" className="mb4">
          After receiving a personalized audio invitation, the attendees were
          sent a URL to RSVP. It was modeled after Ocean’s business card he
          gives Linus when rounding up the crew.
        </Paragraph>
      </div>
      <div className="col-10 flex justify-end">
        <div>Stuff</div>
        <div className="w60p border border-archive-brown-400 rounded-medium border-medium flex flex-column">
          <div className="flex h60px px3 items-center justify-between">
            <div className="hide flex-md justify-between basis80px mr10p">
              <div className="w18px h18px border border-archive-brown-400 border-medium circle" />
              <div className="w18px h18px border border-archive-brown-400 border-medium circle" />
              <div className="w18px h18px border border-archive-brown-400 border-medium circle" />
            </div>
            <div className="flex flex3">
              <div className="w36px h36px border border-archive-brown-400 rounded-medium border-medium shrink0 mr12px" />
              <div className="w100p h36px border border-archive-brown-400 rounded-medium border-medium" />
            </div>
            <div className="none block-md basis80px-md ml10p-md" />
          </div>
          <div className="h50vh border mx3 mb3" />
        </div>
      </div>
    </Grid>
  );
};

export default TheInvitation;
