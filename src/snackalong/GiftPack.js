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
import { textGapBottom } from '../constants';
import styles from '../utils/css';

const GiftPack = ({ className }) => {
  return (
    <Grid className={className}>
      <Filled
        className={styles('col-10 col-6-sm col-offset-2-sm', textGapBottom)}
      >
        <Heading kind="bigfreedia" className="mb4">
          Gift pack for attendees
        </Heading>
        <Paragraph kind="danny">
          Everyone got a pack filled with goodies. It was modeled after Danny’s
          jail release envelope in the beginning of the movie.
        </Paragraph>
      </Filled>
      <div className="col-10 col-5-sm relative">
        <img
          className="l-20px l-50px-sm l-70px-md l-100px-lg relative w80p w90p-lg"
          src={poster}
        />
        <img
          className="absolute b60px b120px-lg r0px r0-lg w50p"
          src={sticker}
        />
        <img className="absolute b10px l30p w15p w20p-sm w20p-md" src={ring} />
      </div>
      <div className="col-10 col-5-sm flex">
        <div>
          <img src={card2} className="scale115p" />
        </div>
        <div>
          <img src={airfreshner} />
        </div>
      </div>
      <div className="col-10 col-5-sm flex">
        <div className="rotate-10-sm w200p relative t7vh-sm t15vh-md l10-sm">
          <img className="scale150p-sm" src={menu2} />
        </div>
      </div>
      <div className="col-10 col-5-sm">
        <img className="relative" src={envelope} />
      </div>
    </Grid>
  );
};

export default GiftPack;
