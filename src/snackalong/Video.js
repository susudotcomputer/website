import React from 'react';
import { Paragraph, Link } from '../components/Text';
import Filled from '../components/Filled';
import Grid from '../components/Grid';

const Video = () => {
  return (
    <Grid className="pb20">
      <div className="col-10">
        <div className="aspect-ratio aspect-ratio--16x9">
          <div className="aspect-ratio__object bg-black_80 inline-flex">
            <button className="circle h15 w15 fz20px p2 border border-white bg-transparent white m-auto">
              Play
            </button>
          </div>
        </div>
      </div>
      <Filled className="col-8">
        <Paragraph kind="danny" className="pt2">
          This video was made by our (very handsome) buddy{' '}
          <Link href="https://elihorne.com">Eli Horne</Link>, with tender
          editing and lots of love.
        </Paragraph>
      </Filled>
    </Grid>
  );
};

export default Video;