import React from 'react';
import Grid from '../components/Grid';
import castImage from '../assets/oceans-cast-transparent.png';
import Note from './Note';
import Speckled from '../components/Speckled';

const Ending = () => {
  return (
    <div className="relative">
      <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
        <div className="max-w1200px bg-gridient h100p mx-auto " />
      </div>
      <div>
        <Grid>
          <div className="col-10 col-6-sm col-offset-2-sm col-4-md col-offset-3-md h80px mb10 children-bg-archive-brown-900">
            <Speckled className="p2 h98px">
              <iframe
                src="https://open.spotify.com/embed/track/3Vo5NwAezmRMP2aH2xQVm1"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="encrypted-media"
              />
            </Speckled>
          </div>
        </Grid>
        <Grid className="mb-15vw">
          <div className="col-3-md col-offset-4-md">
            <Note direction="centerAboveFlip">
              The movie ends with this song, and so does this web page. Bye!
            </Note>
          </div>
        </Grid>
      </div>
      <div className="lh0">
        <img className="w100p" src={castImage} />
      </div>
    </div>
  );
};

export default Ending;
