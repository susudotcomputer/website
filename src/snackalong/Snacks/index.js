import React from 'react';
import Note from '../Note';
import Grid from '../../components/Grid';

import Nachos from './Nachos';
import BrownDrink from './BrownDrink';
import Tea from './Tea';
import NicoiseSalad from './NicoiseSalad';
import Espresso from './Espresso';
import Cigarette from './Cigarette';
import BigSoda from './BigSoda';
import CottonCandy from './CottonCandy';
import Sorbet from './Sorbet';
import Martini from './Martini';
import MysterySalad from './MysterySalad';
import Lollipop from './Lollipop';
import GingerAle from './GingerAle';
import Shrimp from './Shrimp';
import RedBull from './RedBull';
import IceCream from './IceCream';
import JellyBeans from './Jellybeans';
import Burger from './Burger';

const Snacks = () => {
  return (
    <div className="bg-archive-brown-900 py40vh clip">
      <Grid lines={false}>
        <Nachos />
        <div className="col-2 col-offset-2">
          <Note direction="rightAbove">
            This is the only item that was consumed twice. And it was neat. No
            diultion baby!
          </Note>
        </div>
        <BrownDrink />
        <Tea />
        <NicoiseSalad />
        <Espresso />
        <Cigarette />
        <BigSoda />
        <CottonCandy />
        <Sorbet />
        <Martini />
        <MysterySalad />
        <Lollipop />
        <GingerAle />
        <Shrimp />
        <RedBull />
        <IceCream />
        <JellyBeans />
        <Burger />
      </Grid>
    </div>
  );
};

export default Snacks;
