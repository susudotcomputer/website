import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Speckled from '../components/Speckled';

const VideoGraphics = ({ className }) => {
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
          <img className="bg-archive-brown-900 aspect-ratio__object" />
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
        <div className="aspect-ratio aspect-ratio--1x1">
          <img className="bg-archive-brown-900 aspect-ratio__object" />
        </div>
      </div>
    </Speckled>
  );
};

export default VideoGraphics;
