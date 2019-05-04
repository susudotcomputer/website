import React, { useState, useEffect } from 'react';
import { Heading, Paragraph } from '../components/Text';
import Speckled from '../components/Speckled';
import { PlayButton } from '../components/Buttons';
import projector from './assets/snackalong-film-projector.png';
import orange from './assets/circle-foods/orange.png';
import styles from '../utils/css';
import tadaLoop from './assets/tada-loop.mp4';
import Perforation from '../components/Perforation';

const SnackalongProjector = () => {
  return (
    <div className="aspect-ratio aspect-ratio--1x1 snackalong-projector-gradient flex">
      <div>
        <Triangle
          className="absolute l-1 t-1 z103"
          direction="topLeft"
          hex="#EEE6D2"
          size="35px"
        />
        <Triangle
          className="absolute l-1 t-1 z102 o25p"
          direction="topLeft"
          hex="#130e06"
          size="36px"
        />
      </div>
      <div className="aspect-ratio__object">
        <div className="flex items-center h100p">
          <div>
            <div className="flex w60p mb-6 z1 relative mx-auto l-8 clip">
              <img
                className="snack-rotate-360 w100p h100p"
                src={orange}
                alt="Roatating Orange to look like film atop a projector"
              />
              <img
                className="snack-rotate-360 w100p h100p"
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
      <div>
        <Triangle
          className="absolute b-1 r-1 z103"
          direction="bottomRight"
          hex="#EEE6D2"
          size="35px"
        />
        <Triangle
          className="absolute b-1 r-1 z102 o25p"
          direction="bottomRight"
          hex="#130e06"
          size="36px"
        />
      </div>
    </div>
  );
};

const Triangle = ({ direction, size, hex, className }) => {
  const borderProps = [
    'borderTop',
    'borderRight',
    'borderBottom',
    'borderLeft'
  ];
  const transparentStyles = `${size} solid transparent`;
  const colorStyles = `${size} solid ${hex}`;

  const colorMapper = {
    bottomLeft: ['borderBottom', 'borderLeft'],
    bottomRight: ['borderBottom', 'borderRight'],
    topLeft: ['borderTop', 'borderLeft'],
    topRight: ['borderTop', 'borderRight']
  };

  const triangleStyles = borderProps.reduce((accum, prop) => {
    const colorProps = colorMapper[direction];
    colorProps.includes(prop)
      ? (accum[prop] = colorStyles)
      : (accum[prop] = transparentStyles);

    return accum;
  }, {});

  const classes = styles(className, 'w0 h0');

  return <div className={classes} style={triangleStyles} />;
};

const VideoGraphics = () => {
  const videoEl = React.createRef();
  const [playing, setVideoState] = useState(false);

  const restartVideo = () => {
    videoEl.current.pause();
    setVideoState(false);
  };

  const handleVideoPlay = () => {
    playing ? videoEl.current.pause() : videoEl.current.play();
    setVideoState(!playing);
  };

  useEffect(() => {
    videoEl.current.addEventListener('ended', restartVideo, false);
    // return () =>
    //   videoEl.current.removeEventListener('ended', handleVideoPlay, false);
  });

  return (
    <Speckled grid className="py10 py20-md relative">
      <Perforation direction="up" />
      <div className="col-10 col-5-sm pr5-sm mb10 mb0-sm">
        <Heading kind="bigfreedia" className="col-6 col-offset-2 mb2">
          Tada!
        </Heading>
        <Paragraph kind="danny" className="mb4 col-6 col-offset-2">
          To signal that food was coming in the movie, we whipped up a little
          countdown clock and a custom synth alert noise to go with it.
        </Paragraph>
        <div className="aspect-ratio aspect-ratio--1x1">
          <div>
            <Triangle
              className="absolute r-1 t-1 z103"
              direction="topRight"
              hex="#EEE6D2"
              size="35px"
            />
            <Triangle
              className="absolute r-1 t-1 z102 o25p"
              direction="topRight"
              hex="#130e06"
              size="36px"
            />
          </div>
          {!playing && (
            <div className="aspect-ratio__object flex z101">
              <PlayButton onClick={handleVideoPlay}>Play</PlayButton>
            </div>
          )}

          <video
            className="aspect-ratio__object"
            ref={videoEl}
            src={tadaLoop}
          />
          <div>
            <Triangle
              className="absolute b-1 l-1 z103"
              direction="bottomLeft"
              hex="#EEE6D2"
              size="35px"
            />
            <Triangle
              className="absolute b-1 l-1 z102 o25p"
              direction="bottomLeft"
              hex="#130e06"
              size="36px"
            />
          </div>
        </div>
      </div>
      <div className="col-10 col-5-sm pl5-sm">
        <Heading kind="bigfreedia" className="col-6 col-offset-2 mb2">
          Pre-show video logo
        </Heading>
        <Paragraph kind="danny" className="mb4 col-6 col-offset-2">
          While the group was settling in this alternate version of the logo
          animated with the trivia. The food acted as film reels and spun!
        </Paragraph>
        <SnackalongProjector />
      </div>
      <Perforation direction="down" />
    </Speckled>
  );
};

export default VideoGraphics;
