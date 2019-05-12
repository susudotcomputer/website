import React from 'react';
import bff from './assets/bff.jpg';
import Grid from '../components/Grid';
import Note from './Note';
import balloons from './assets/balloons.png';
import { paddingTopSpacer } from '../constants';

const BalloonBoys = () => {
  return (
    <>
      <Grid className={paddingTopSpacer}>
        <div className="col-8 col-offset-1 col-offset-2-md col-4-md p2 bg-archive-beige lh0 rotate-3 mb-35p">
          <img src={bff} />
        </div>
        <div className="col-3 ">
          <Note>
            This is the one photo we have of us from the night. Two handsome
            boys&nbsp;in&nbsp;SuSuits.
          </Note>
        </div>
      </Grid>
      <div className="relative">
        <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
          <div className="max-w1200px bg-gridient h100p mx-auto" />
        </div>
        <div className="mx-auto max-w1400px lh0">
          <img className="" src={balloons} />
        </div>
      </div>
    </>
  );
};

export default BalloonBoys;
