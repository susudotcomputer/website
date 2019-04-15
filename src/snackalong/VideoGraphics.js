import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Speckled from '../components/Speckled';
import projector from './assets/snackalong-film-projector.png';
import orange from './assets/circle-foods/orange.png';
import AutoplayVideo from '../components/AutoplayVideo';
import tadaLoop from './assets/tada-loop.mp4';
import Note from './Note';

const SnackalongProjector = () => {
  return (
    <div className="aspect-ratio aspect-ratio--1x1 snackalong-projector-gradient flex">
      <div className="aspect-ratio__object">
        <div className="flex items-center h100p">
          <div>
            <div className="flex w60p mb-6 z1 relative mx-auto l-8">
              <img
                className="snack-rotate-360"
                src={orange}
                alt="Roatating Orange to look like film atop a projector"
              />
              <img
                className="snack-rotate-360"
                src={orange}
                alt="Roatating Orange to look like film atop a projector"
              />
            </div>
            <div className="w80p mx-auto relative">
              <img src={projector} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoGraphics = () => {
  return (
    <Speckled className="py20">
      <div className="col-10 col-5-sm pr3-sm">
        <Heading kind="bigfreedia" className="col-6 col-offset-2 mb2">
          Tada!
        </Heading>
        <Paragraph kind="danny" className="mb4 col-6 col-offset-2">
          To signal that food was coming in the movie, we whipped up a little
          countdown clock and a custom synth alert noise to go with it.
        </Paragraph>
        <div className="aspect-ratio aspect-ratio--1x1">
          <div className="aspect-ratio__object flex z101">
            <button className="m-auto bg-white">Play</button>
          </div>
          <video className="aspect-ratio__object" src={tadaLoop} />
        </div>
      </div>
      <div className="col-10 col-5-sm pl3-sm">
        <Heading kind="bigfreedia" className="col-6 col-offset-2 mb2">
          Pre-show video logo
        </Heading>
        <Paragraph kind="danny" className="mb4 col-6 col-offset-2">
          While the group was settling in this alternate version of the logo
          animated with the trivia. The food acted as film reels and spun!
        </Paragraph>
        <SnackalongProjector />
      </div>
    </Speckled>
  );
};

export default VideoGraphics;
