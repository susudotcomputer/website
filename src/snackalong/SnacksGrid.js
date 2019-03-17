import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Speckled from '../components/Speckled';
import styles from '../utils/css';
import { RenderSvg } from './NeonIcon';

import * as Nachos from './Snacks/svg/NachosSVG';
import * as BrownDrink from './Snacks/svg/BrownDrinkSVG';
import * as Tea from './Snacks/svg/TeaSVG';
import * as NicoiseSalad from './Snacks/svg/NicoiseSaladSVG';
import * as Espresso from './Snacks/svg/EspressoSVG';
import * as Cigarette from './Snacks/svg/CigaretteSVG';
import * as BigSoda from './Snacks/svg/BigSodaSVG';
import * as CottonCandy from './Snacks/svg/CottonCandySVG';
import * as Sorbet from './Snacks/svg/SorbetSVG';
import * as Martini from './Snacks/svg/MartiniSVG';
import * as MysterySalad from './Snacks/svg/MysterySaladSVG';
import * as Lollipop from './Snacks/svg/LollipopSVG';
import * as GingerAle from './Snacks/svg/GingerAleSVG';
import * as Shrimp from './Snacks/svg/ShrimpSVG';
import * as RedBull from './Snacks/svg/RedBullSVG';
import * as IceCream from './Snacks/svg/IceCreamSVG';
import * as JellyBeans from './Snacks/svg/JellybeansSVG';
import * as Burger from './Snacks/svg/BurgerSVG';

const snacksArr = [
  { title: 'nachos', svg: Nachos },
  { title: 'brown-drink', svg: BrownDrink },
  { title: 'tea', svg: Tea },
  { title: 'nicoise', svg: NicoiseSalad },
  { title: 'espresso', svg: Espresso },
  { title: 'cigarette', svg: Cigarette },
  { title: 'big-soda', svg: BigSoda },
  { title: 'cotton-cnady', svg: CottonCandy },
  { title: 'sorbet', svg: Sorbet },
  { title: 'martini', svg: Martini },
  { title: 'ceasar', svg: MysterySalad },
  { title: 'lollipop', svg: Lollipop },
  { title: 'ginger-ale', svg: GingerAle },
  { title: 'shrimp', svg: Shrimp },
  { title: 'red-bull', svg: RedBull },
  { title: 'gelato', svg: IceCream },
  { title: 'jellybeans', svg: JellyBeans },
  { title: 'cheese-burger', svg: Burger },
  { title: '', svg: {} },
  { title: '', svg: {} }
];

const SnacksGrid = ({ className }) => {
  return (
    <>
      <Speckled>
        <Heading kind="bigfreedia" className="col-6 col-offset-2">
          Below are the 19 items Rusty orally interacts with…
        </Heading>
        <Paragraph className="mb4 col-6 col-offset-2">
          That is a weird way to say that right? It’s just that some of the
          items below aren’t exactly “food”—sometimes he just puts items to his
          mouth and we counted every. single. one.
        </Paragraph>

        <div className="col-10">
          <ul className="max-w1200px mx-auto snackalong__snacks bg-archive-brown-400">
            {snacksArr.map(({ title, svg }, i) => {
              const { SVG: SvgData, colorMap } = svg;
              return (
                <li
                  key={i}
                  className="aspect-ratio aspect-ratio--1x1 bg-archive-beige"
                >
                  <div className="aspect-ratio__object flex items-center justify-center">
                    {SvgData && (
                      <RenderSvg
                        colorMap={colorMap}
                        fillColor={styles('fill-archive-brown-400')}
                      >
                        <SvgData />
                      </RenderSvg>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Speckled>
    </>
  );
};

export default SnacksGrid;
