import React from 'react';
import Grid from '../components/Grid';
import ArchiveCard from '../components/archive-card/ArchiveCard';
import WhatIs from './WhatIs';
import Video from './Video';
import Branding from './Branding';
import Poster from './Poster';
import SnacksGrid from './SnacksGrid';
import Snacks from './Snacks';
import GiftPack from './GiftPack';
import VideoGraphics from './VideoGraphics';
import './styles.scss';
import TheInvitation from './TheInvitation';
import MiscTabs from './MiscTabs';
import Ending from './Ending';
import SiteLogo from '../components/SiteLogo';
import Footer from './Footer';
import styles from '../utils/css';

const Snackalong = () => {
  return (
    <div className="archive-brown-900">
      <Grid className="h85vh-md relative">
        <SiteLogo className="col-1 relative z1" />
        <div className="w101p absolute t0 h50vh fade-white-transparent" />
        <div
          className={styles(
            'col-10 pt20vw z1 relative mb10 self-center',
            'col-8-sm col-offset-1-sm',
            'col-6-md col-offset-2-md mb0-md mx8-md pt0-md'
          )}
        >
          <ArchiveCard
            project="Snackalong: Ocean's Eleven"
            location="Brooklyn, NY"
            medium="Event"
            date="2018&#8209;06&#8209;30"
            budget="n/a"
            tactics={[
              'Design',
              'Branding',
              'Illustration',
              'Video',
              'Copy writing',
              'Composition',
              'Emceeing',
              'Cooking',
              'Sleuthing'
            ]}
          />
        </div>
      </Grid>
      <WhatIs />
      <Video />
      <Branding className="pb20" />
      <Poster className="pb20" />
      <SnacksGrid />
      <Snacks />
      <GiftPack />
      <VideoGraphics />
      <TheInvitation />
      <Grid>
        <MiscTabs />
      </Grid>
      <Ending />
      <Footer />
    </div>
  );
};

export default Snackalong;
