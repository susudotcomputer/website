import React from 'react';
import Filled from '../components/Filled';
import { Paragraph, Heading } from '../components/Text';
import Grid from '../components/Grid';

import airfreshner from './assets/pack/airfreshner.png';
import card2 from './assets/pack/card2.png';
import envelope from './assets/pack/envelope.png';
import menu2 from './assets/pack/menu2.png';
import poster from './assets/pack/poster.png';
import ring from './assets/pack/ring.png';
import sticker from './assets/pack/sticker.png';

const GiftPack = () => {
  return (
    <Grid className={'py20'}>
      <Filled className="col-10 col-4-sm col-offset-3-sm">
        <Heading kind="bigfreedia" className="mb4">
          Gift pack for attendees
        </Heading>
        <Paragraph kind="reuben" className="mb4">
          Everyone got a pack filled with goodies. It was modeled after Danny’s
          jail release envelope in the beginning of the movie.
        </Paragraph>
      </Filled>
      <div className="col-10 col-5-sm relative">
        <img className="l-100px relative w90p" src={poster} />
        <img className="absolute b20 r0 w300px" src={sticker} />
        <img className="absolute b0 l30p w100px" src={ring} />
      </div>
      <div className="col-10 col-5-sm flex">
        <div>
          <img src={card2} />
        </div>
        <div>
          <img src={airfreshner} />
        </div>
      </div>
      <div className="col-10 col-5-sm flex">
        <div className="rotate-10 w200p relative t15vh">
          <img className="scale150p" src={menu2} />
        </div>
      </div>
      <div className="col-10 col-5-sm">
        <img className="relative" src={envelope} />
      </div>
    </Grid>
  );
};

export default GiftPack;
