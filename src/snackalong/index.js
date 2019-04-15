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

const Snackalong = () => {
  return (
    <div className="archive-brown-900">
      <Grid className="h85vh relative">
        <SiteLogo className="col-1 relative z1" />
        <div className="w101p absolute t0 h50vh fade-white-transparent" />
        <ArchiveCard
          project="Snackalong: Ocean's Eleven"
          location="Brooklyn, NY"
          medium="Event"
          date="2018&#8209;06&#8209;30"
          budget="n/a"
          tactics={{
            visualDesign: true,
            webDevelopment: false,
            cooking: true,
            branding: true,
            photography: false,
            emceeing: true,
            copyWriting: true,
            video: true,
            illustration: true,
            carpentry: false,
            print: true,
            choreography: false,
            composition: true,
            motionGraphics: true,
            ceramics: false,
            keynote: true,
            sleuthing: true,
            propBuilding: true
          }}
        />
      </Grid>
      <WhatIs />
      <Video />
      <Branding className="pb20" />
      <Poster className="pb20" />
      <SnacksGrid className="pt20" />
      <Snacks />
      <GiftPack className="py20" />
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
