import React from 'react';
import { Paragraph, Link } from '../components/Text';
import Filled from '../components/Filled';
import Grid from '../components/Grid';
import { PlayButton } from '../components/Buttons';
import videoThumbnail from './assets/video-thumbnail.mp4';
import AutoplayVideo from '../components/AutoplayVideo';
import Speckled from '../components/Speckled';

const Video = () => {
  return (
    <Grid className="pb20">
      <Speckled className="col-10 p8">
        <div className="aspect-ratio aspect-ratio--16x9">
          <div className="aspect-ratio__object bg-black_20 inline-flex z101">
            <PlayButton />
          </div>
          <AutoplayVideo
            className="aspect-ratio__object"
            src={videoThumbnail}
          />
        </div>
      </Speckled>
      <Filled className="col-8">
        <Paragraph kind="danny" className="pt4">
          This video was made by our (very handsome) buddy{' '}
          <Link kind="danny" bold href="https://elihorne.com">
            Eli Horne
          </Link>
          , with tender editing and lots of love.
        </Paragraph>
      </Filled>
    </Grid>
  );
};

export default Video;
