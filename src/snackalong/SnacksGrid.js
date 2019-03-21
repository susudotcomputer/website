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

import nachosPhoto from './Snacks/assets/01-nachos-photo.jpg';
import brownDrinkPhoto from './Snacks/assets/02-browndrink-photo.jpg';
import teaPhoto from './Snacks/assets/04-tea-photo.jpg';
import nicoiseSaladPhoto from './Snacks/assets/05-nicoisesalad-photo.jpg';
import espressoPhoto from './Snacks/assets/06-espresso-photo.jpg';
import cigarettePhoto from './Snacks/assets/07-cigarette-photo.jpg';
import bigSodaPhoto from './Snacks/assets/08-bigsoda-photo.jpg';
import cottonCandyPhoto from './Snacks/assets/09-cottoncandy-photo.jpg';
import sorbetPhoto from './Snacks/assets/10-sorbet-photo.jpg';
import martiniPhoto from './Snacks/assets/11-martini-photo.jpg';
import mysterySaladPhoto from './Snacks/assets/12-mysterysalad-photo.jpg';
import lollipopPhoto from './Snacks/assets/13-lollipop-photo.jpg';
import gingerAlePhoto from './Snacks/assets/14-gingerale-photo.jpg';
import shrimpPhoto from './Snacks/assets/15-shrimp-photo.jpg';
import redBullPhoto from './Snacks/assets/16-redbull-photo.jpg';
import iceCreamPhoto from './Snacks/assets/17-icecream-photo.jpg';
import jellyBeansPhoto from './Snacks/assets/18-jellybeans-photo.jpg';
import burgerPhoto from './Snacks/assets/19-burger-photo.jpg';

const snacksArr = [
  {
    title: 'nachos',
    svg: Nachos,
    photo: nachosPhoto,
    position: '50% 62%'
  },
  {
    title: 'brown-drink',
    svg: BrownDrink,
    photo: brownDrinkPhoto,
    position: '50% 63%'
  },
  {
    title: 'tea',
    svg: Tea,
    photo: teaPhoto,
    position: '62% 73%'
  },
  {
    title: 'nicoise',
    svg: NicoiseSalad,
    photo: nicoiseSaladPhoto,
    position: '60% 66%'
  },
  {
    title: 'espresso',
    svg: Espresso,
    photo: espressoPhoto,
    position: '82% 46%'
  },
  {
    title: 'cigarette',
    svg: Cigarette,
    photo: cigarettePhoto,
    position: '50% 40%'
  },
  {
    title: 'big-soda',
    svg: BigSoda,
    photo: bigSodaPhoto,
    position: '54% 15%'
  },
  {
    title: 'cotton-cnady',
    svg: CottonCandy,
    photo: cottonCandyPhoto,
    position: '50% 50%'
  },
  {
    title: 'sorbet',
    svg: Sorbet,
    photo: sorbetPhoto,
    position: '48% 86%'
  },
  {
    title: 'martini',
    svg: Martini,
    photo: martiniPhoto,
    position: '53% 25%'
  },
  {
    title: 'ceasar',
    svg: MysterySalad,
    photo: mysterySaladPhoto,
    position: '50% 50%'
  },
  {
    title: 'lollipop',
    svg: Lollipop,
    photo: lollipopPhoto,
    position: '51% 30%'
  },
  {
    title: 'ginger-ale',
    svg: GingerAle,
    photo: gingerAlePhoto,
    position: '50% 50%'
  },
  {
    title: 'shrimp',
    svg: Shrimp,
    photo: shrimpPhoto,
    position: '38% 28%'
  },
  {
    title: 'red-bull',
    svg: RedBull,
    photo: redBullPhoto,
    position: '45% 83%'
  },
  {
    title: 'gelato',
    svg: IceCream,
    photo: iceCreamPhoto,
    position: '48% 61%'
  },
  {
    title: 'jellybeans',
    svg: JellyBeans,
    photo: jellyBeansPhoto,
    position: '50% 38%'
  },
  {
    title: 'cheese-burger',
    svg: Burger,
    photo: burgerPhoto,
    position: '57% 66%'
  },
  {
    title: '',
    svg: {},
    photo: ''
  },
  {
    title: '',
    svg: {},
    photo: ''
  }
];

const SnacksGrid = () => {
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
            {snacksArr.map(({ svg, photo, position }, i) => {
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
                    <div className="absolute t0 r0 b0 l0 p2 o0p hover-o100p">
                      <img
                        className="o-fit-none w100p h100p circle clip"
                        src={photo}
                        style={{ objectPosition: position }}
                      />
                    </div>
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
