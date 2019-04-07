import React from 'react';
import Grid from '../components/Grid';
import ArchiveCard from '../components/archive-card/ArchiveCard';
import WhatIs from './WhatIs';
import Branding from './Branding';
import Poster from './Poster';
import SnacksGrid from './SnacksGrid';
import Snacks from './Snacks';
import GiftPack from './GiftPack';
import VideoGraphics from './VideoGraphics';
import './styles.css';
import TheInvitation from './TheInvitation';
import MiscTabs from './MiscTabs';
import Ending from './Ending';
import SiteLogo from '../components/SiteLogo';
import Footer from './Footer';

const Snackalong = () => {
  return (
    <div className="archive-brown-900">
      <Grid className="h100vh relative">
        <SiteLogo className="col-1 relative z1" />
        <div className="w101p absolute t0 h50vh fade-white-transparent" />
        <ArchiveCard
          project="Snackalong: Ocean's Eleven"
          location="Brooklyn, NY"
          medium="Event"
          date="2018&#8209;06&#8209;30"
          budget="n/a"
          tactics={[
            'visualDesign',
            'webDevelopment',
            'cooking',
            'branding',
            'photography',
            'copyWriting',
            'video',
            'illustration',
            'print'
          ]}
        />
      </Grid>
      <Grid>
        <WhatIs />
        <div className="col-10 mb20">
          <div className="aspect-ratio aspect-ratio--16x9">
            <div className="aspect-ratio__object bg-black_80 inline-flex">
              <button className="circle h15 w15 fz20px p2 border border-white bg-transparent white m-auto">
                Play
              </button>
            </div>
          </div>
        </div>
      </Grid>
      <Branding className="pb10" />
      <Poster className="pb10 mb-20" />
      <SnacksGrid className="pb40vh" />
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
