import React from 'react';
import Filled from '../components/Filled';
import { Paragraph, Heading } from '../components/Text';
import Grid from '../components/Grid';

import airfreshner from './assets/pack/airfreshner.png';
import card1 from './assets/pack/card1.png';
import card2 from './assets/pack/card2.png';
import envelope from './assets/pack/envelope.png';
import menu1 from './assets/pack/menu1.png';
import menu2 from './assets/pack/menu2.png';
import poster from './assets/pack/poster.png';
import ring from './assets/pack/ring.png';
import sticker from './assets/pack/sticker.png';

const Poster = ({ className }) => {
  return (
    <Grid className={className}>
      <Filled className="col-4 col-offset-3">
        <Heading kind="bigfreedia" className="mb4">
          Gift pack for attendees
        </Heading>
        <Paragraph kind="reuben" className="mb4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        </Paragraph>
      </Filled>
      <div className="col-5 relative">
        <img className="l-100px relative w90p" src={poster} />
        <img className="absolute b20 r0 w300px" src={sticker} />
        <img className="absolute b0 l30p w100px" src={ring} />
      </div>
      <div className="col-5 flex">
        <div>
          <img src={card1} />
        </div>
        <div>
          <img src={airfreshner} />
        </div>
      </div>
      <div className="col-5 flex">
        <img className="w75p m-auto" src={menu1} />
      </div>
      <div className="col-5">
        <img className="rotate5" src={envelope} />
      </div>
    </Grid>
  );
};

export default Poster;
