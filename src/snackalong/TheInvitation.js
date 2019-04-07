import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';
import deetsVideo from './assets/invitation/deets.mp4';
import cardFront from './assets/invitation/business_card-front.jpg';
import cardBack from './assets/invitation/business_card-back.jpg';
import styles from '../utils/css';
import AutoplayVideo from '../components/AutoplayVideo';

const WebBrowser = ({ className, children }) => {
  const wrapperStyles = styles(
    className,
    'w60p border border-archive-brown-400 rounded-medium border-medium flex flex-column'
  );
  return (
    <div className={wrapperStyles}>
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
      <div className="border mx3 mb3 lh0">{children}</div>
    </div>
  );
};

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
      <div className="col-4 px6 flex flex-column justify-center">
        <img src={cardFront} className="mb4" />
        <img src={cardBack} className="rotate-3" />
      </div>
      <div className="col-6">
        <WebBrowser className="w100p">
          <AutoplayVideo className="max-w100p" src={deetsVideo} />
        </WebBrowser>
      </div>
    </Grid>
  );
};

export default TheInvitation;
