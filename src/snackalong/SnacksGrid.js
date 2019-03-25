import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Speckled from '../components/Speckled';
import styles from '../utils/css';
import InlineSVG from 'react-inlinesvg';

import nachosSVG from './Snacks/assets/svg/01-nachos.svg';
import brownDrinkSVG from './Snacks/assets/svg/02-browndrink.svg';
import teaSVG from './Snacks/assets/svg/04-tea.svg';
import nicoiseSaladSVG from './Snacks/assets/svg/05-nicoisesalad.svg';
import espressoSVG from './Snacks/assets/svg/06-espresso.svg';
import cigaretteSVG from './Snacks/assets/svg/07-cigarette.svg';
import bigSodaSVG from './Snacks/assets/svg/08-bigsoda.svg';
import cottonCandySVG from './Snacks/assets/svg/09-cottoncandy.svg';
import sorbetSVG from './Snacks/assets/svg/10-sorbet.svg';
import martiniSVG from './Snacks/assets/svg/11-martini.svg';
import mysterySaladSVG from './Snacks/assets/svg/12-mysterysalad.svg';
import lollipopSVG from './Snacks/assets/svg/13-lollipop.svg';
import gingerAleSVG from './Snacks/assets/svg/14-gingerale.svg';
import shrimpSVG from './Snacks/assets/svg/15-shrimp.svg';
import redBullSVG from './Snacks/assets/svg/16-redbull.svg';
import iceCreamSVG from './Snacks/assets/svg/17-icecream.svg';
import jellyBeansSVG from './Snacks/assets/svg/18-jellybeans.svg';
import burgerSVG from './Snacks/assets/svg/19-burger.svg';

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
    svg: nachosSVG,
    photo: nachosPhoto,
    position: '50% 62%'
  },
  {
    title: 'brown-drink',
    svg: brownDrinkSVG,
    photo: brownDrinkPhoto,
    position: '50% 63%'
  },
  {
    title: 'tea',
    svg: teaSVG,
    photo: teaPhoto,
    position: '62% 73%'
  },
  {
    title: 'nicoise',
    svg: nicoiseSaladSVG,
    photo: nicoiseSaladPhoto,
    position: '60% 66%'
  },
  {
    title: 'espresso',
    svg: espressoSVG,
    photo: espressoPhoto,
    position: '82% 46%'
  },
  {
    title: 'cigarette',
    svg: cigaretteSVG,
    photo: cigarettePhoto,
    position: '50% 40%'
  },
  {
    title: 'big-soda',
    svg: bigSodaSVG,
    photo: bigSodaPhoto,
    position: '54% 15%'
  },
  {
    title: 'cotton-cnady',
    svg: cottonCandySVG,
    photo: cottonCandyPhoto,
    position: '50% 50%'
  },
  {
    title: 'sorbet',
    svg: sorbetSVG,
    photo: sorbetPhoto,
    position: '48% 86%'
  },
  {
    title: 'martini',
    svg: martiniSVG,
    photo: martiniPhoto,
    position: '53% 25%'
  },
  {
    title: 'ceasar',
    svg: mysterySaladSVG,
    photo: mysterySaladPhoto,
    position: '50% 50%'
  },
  {
    title: 'lollipop',
    svg: lollipopSVG,
    photo: lollipopPhoto,
    position: '51% 30%'
  },
  {
    title: 'ginger-ale',
    svg: gingerAleSVG,
    photo: gingerAlePhoto,
    position: '50% 50%'
  },
  {
    title: 'shrimp',
    svg: shrimpSVG,
    photo: shrimpPhoto,
    position: '38% 28%'
  },
  {
    title: 'red-bull',
    svg: redBullSVG,
    photo: redBullPhoto,
    position: '45% 83%'
  },
  {
    title: 'gelato',
    svg: iceCreamSVG,
    photo: iceCreamPhoto,
    position: '48% 61%'
  },
  {
    title: 'jellybeans',
    svg: jellyBeansSVG,
    photo: jellyBeansPhoto,
    position: '50% 38%'
  },
  {
    title: 'cheese-burger',
    svg: burgerSVG,
    photo: burgerPhoto,
    position: '57% 66%'
  },
  {
    title: '',
    svg: '',
    photo: ''
  },
  {
    title: '',
    svg: '',
    photo: ''
  }
];

const SnacksGrid = () => {
  return (
    <Speckled className="pt20vh">
      <Heading kind="bigfreedia" className="col-6 col-offset-2">
        Below are the 19 items Rusty orally interacts with…
      </Heading>
      <Paragraph className="mb4 col-6 col-offset-2">
        That is a weird way to say that right? It’s just that some of the items
        below aren’t exactly “food”—sometimes he just puts items to his mouth
        and we counted every. single. one.
      </Paragraph>

      <div className="col-10">
        <ul className="max-w1200px mx-auto snackalong__snacks bg-archive-brown-400">
          {snacksArr.map(({ svg, photo, position }, i) => {
            return (
              <li
                key={i}
                className="aspect-ratio aspect-ratio--1x1 bg-archive-beige hov-target"
              >
                <div className="aspect-ratio__object flex items-center justify-center">
                  {svg && (
                    <InlineSVG
                      className={styles(
                        'fill-archive-brown-400 hov-item-fill-white w65p relative z1 click-through'
                      )}
                      src={svg}
                    />
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
  );
};

export default SnacksGrid;
