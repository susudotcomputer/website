import React from "react";
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
import Footer from "./Footer";
import BalloonBoys from "./BalloonBoys";
import QuestionsComments from "./QuestionsComments";
import { paddingBottomSpacer, paddingYSpacer } from "../constants";
import snackalongFacebook from "./assets/social-card-facebook.jpg";
import snackalongTwitter from "./assets/social-card-twitter.jpg";
import { Meta } from "../utils/Meta";
import { PlayingCards } from "./PlayingCards";
import { SnackalongHeader } from "./SnackalongHeader";

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
      <SnackalongHeader />
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
