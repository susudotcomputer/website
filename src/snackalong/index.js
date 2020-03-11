import React from "react";
import Grid from "../components/Grid";
import ArchiveCard from "../components/archive-card/ArchiveCard";
import WhatIs from "./WhatIs";
import Video from "./Video";
import Branding from "./Branding";
import Poster from "./Poster";
import SnacksGrid from "./SnacksGrid";
import Snacks from "./Snacks";
import GiftPack from "./GiftPack";
import VideoGraphics from "./VideoGraphics";
import "./styles.scss";
import TheInvitation from "./TheInvitation";
import MiscTabs from "./MiscTabs";
import Ending from "./Ending";
import SiteLogo from "../components/SiteLogo";
import Footer from "./Footer";
import styles from "../utils/css";
import BalloonBoys from "./BalloonBoys";
import QuestionsComments from "./QuestionsComments";
import { paddingBottomSpacer, paddingYSpacer } from "../constants";
import snackalongFacebook from "./assets/social-card-facebook.jpg";
import snackalongTwitter from "./assets/social-card-twitter.jpg";
import { Meta } from "../utils/Meta";
import { PlayingCards } from "./PlayingCards";

const Snackalong = () => {
  return (
    <div className="archive-brown-900">
      <Meta
        title="SuSu Studio | Snackalong: Ocean's Eleven"
        description="You’ve heard of a movie sing-a-long... well a Snackalong™ is when you watch a film and eat everything the characters are eating. For the inaugural occasion, we chose one of our favorite films: Ocean’s Eleven. It was a very thorough night, we prepared all 19 of Brad Pitt’s items."
        url="https://susu.computer/snackalong"
        twitterImageAlt="Photographs and a neon illustration of shrimp cocktail, a burger and whiskey which are all items that Brad Pitt consumes during the film Ocean's Eleven."
        twitterImage={snackalongTwitter}
        facebookImage={snackalongFacebook}
      />
      <Grid className="h85vh-md relative">
        <div className="col-1 relative z1 flex">
          <SiteLogo className="w100p px2-lg" />
        </div>

        <div className="w101p absolute t0 h50vh fade-white-transparent" />
        <div
          className={styles(
            "col-10 pt20vw z1 relative mb10 self-center",
            "col-8-sm col-offset-1-sm",
            "col-6-md col-offset-2-md mb0-md mx8-md pt0-md"
          )}
        >
          <ArchiveCard
            project="Snackalong: Ocean's Eleven"
            location="Brooklyn, NY"
            medium="Event"
            date="2018&#8209;06&#8209;30"
            budget="n/a"
            tactics={[
              "Design",
              "Branding",
              "Illustration",
              "Video",
              "Copy writing",
              "Composition",
              "Emceeing",
              "Cooking",
              "Sleuthing"
            ]}
          />
        </div>
      </Grid>
      <WhatIs className={paddingBottomSpacer} />
      <Video className={paddingBottomSpacer} />
      <Branding className={paddingBottomSpacer} />
      <Poster className={paddingBottomSpacer} />
      <SnacksGrid />
      <Snacks className={paddingBottomSpacer} />
      <GiftPack className={paddingYSpacer} />
      <VideoGraphics className={paddingYSpacer} />
      <TheInvitation className={paddingYSpacer} />
      <MiscTabs className={paddingBottomSpacer} />
      <PlayingCards />
      <BalloonBoys />
      <QuestionsComments className={paddingYSpacer} />
      <Ending />
      <Footer />
    </div>
  );
};

export default Snackalong;
