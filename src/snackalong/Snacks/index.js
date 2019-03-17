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
        <div className="col-6 col-offset-1">
          <Note direction="rightAbove">
            We couldn’t find red paper trays anywhere! Bonkers, right? So Kilian
            covered each one with red contact paper to match the movie. It was
            the first item so it was important to great right and set the tone.
          </Note>
        </div>
        <BrownDrink />
        <div className="col-2 col-offset-1">
          <Note direction="rightAbove">
            This is the only item that is consumed twice!
          </Note>
        </div>
        <Tea />
        <div className="col-6 col-offset-1">
          <Note direction="rightAbove">
            We googled the fuck out of the internet to find the exact right
            china cup. Turns out the print is “Syracuse China Strawberry
            Hill”... DM us for a detailed history of the Dutch colonization of
            the American northwest and its influence on dishware design
          </Note>
        </div>
        <NicoiseSalad />
        <Espresso />
        <div className="col-4 col-offset-1">
          <Note direction="rightAbove">
            Totally guessed on the baked good he was eating. We decided banana
            bread is delicious and would work.
          </Note>
        </div>
        <Cigarette />
        <BigSoda />
        <div className="col-4 col-offset-1">
          <Note direction="rightAbove">
            Did someone say custom stickers to match the circus event they were
            attending?? Hey oh!
          </Note>
        </div>
        <CottonCandy />
        <div className="col-4 col-offset-1">
          <Note direction="rightAbove">
            Note to everyone, cotton candy does not keep well and will
            photograph terribly and is hard to replace because where do you
            quickly get some cotton candy?!
          </Note>
        </div>
        <Sorbet />
        <Martini />
        <MysterySalad />
        <div className="col-6 col-offset-1">
          <Note direction="rightAbove">
            Totally mystery salad. We went frame-by-frame to try and get a clue
            to what kind of salad it was. No friggin’ clue. So we picked caesar
            salad. Yum, so tasty! (Kilian made his own dressing too! Who does
            that?! So good.)
          </Note>
        </div>
        <Lollipop />
        <GingerAle />
        <Shrimp />
        <RedBull />
        <div className="col-6 col-offset-1">
          <Note direction="rightAbove">
            TBH, we actually missed this one for the event. Brad drinks it so
            sneakily in the background. An audience member pointed it out to us
            after. It would be more heartbreaking if it wasn’t a redbull. No one
            really needs a redbull— especially after all the coffee and tea
            before.
          </Note>
        </div>
        <IceCream />
        <JellyBeans />
        <Burger />
        <div className="col-6 col-offset-1">
          <Note direction="rightAbove">
            Kilian made such a great burger. Legendary.
          </Note>
        </div>
      </Grid>
    </div>
  );
};

export default Snacks;
