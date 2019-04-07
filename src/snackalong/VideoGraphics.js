import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Speckled from '../components/Speckled';
import projector from './assets/snackalong-film-projector.png';
import orange from './assets/circle-foods/orange.png';
import AutoplayVideo from '../components/AutoplayVideo';
import tadaLoop from './assets/tada-loop.mp4';

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
      <div className="col-5 pr3">
        <Heading kind="bigfreedia" className="col-6 col-offset-2 mb2">
          Tada!
        </Heading>
        <Paragraph kind="danny" className="mb4 col-6 col-offset-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dignissim odio ac ullamcorper auctor. Nulla a orci pulvinar, ultricies
          ante nec, finibus mauris. Morbi sit amet purus quam.
        </Paragraph>
        <div className="aspect-ratio aspect-ratio--1x1">
          <AutoplayVideo className="aspect-ratio__object" src={tadaLoop} />
        </div>
      </div>
      <div className="col-5 pl3">
        <Heading kind="bigfreedia" className="col-6 col-offset-2 mb2">
          Pre-show Logo Video
        </Heading>
        <Paragraph kind="danny" className="mb4 col-6 col-offset-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dignissim odio ac ullamcorper auctor. Nulla a orci pulvinar, ultricies
          ante nec, finibus mauris. Morbi sit amet purus quam.
        </Paragraph>
        <SnackalongProjector />
      </div>
    </Speckled>
  );
};

export default VideoGraphics;
