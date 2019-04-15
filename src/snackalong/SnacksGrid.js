import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Speckled from '../components/Speckled';
import styles from '../utils/css';
import InlineSVG from 'react-inlinesvg';
import snacks from './Snacks/snackdata';
import { titleToId } from '../utils/links';

const blankItem = {
  title: '',
  svg: '',
  photo: ''
};

const snacksArr = [...snacks, blankItem, blankItem];

const SnacksGrid = ({ className }) => {
  return (
    <Speckled className={className}>
      <div className="col-6 col-offset-2 mb10">
        <Heading kind="bigfreedia" className="col-6 col-offset-2 mb4">
          All 👏 Of 👏 The 👏 Foods 👏
        </Heading>
        <Paragraph kind="danny" className="mb4">
          Below are the 19 items Rusty orally interacts with… which is a weird
          way to say that right? It’s just that some of the items below aren’t
          exactly food. Sometimes he just puts items to his mouth and we counted
          every single item.
        </Paragraph>
        <Paragraph kind="danny" className="mb4 ">
          We should mention upfront this is not a balanced meal, in sustenance
          or timing. In the beginning items come fast and sometimes they’re 30
          minutes apart.
        </Paragraph>
      </div>

      <div className="col-10 relative">
        <ul className="w100p mx-auto snackalong__snacks">
          {snacksArr.map(({ svg, image, position, title }, i) => {
            return (
              <li key={i} className="aspect-ratio aspect-ratio--1x1 hov-target">
                <a
                  href={`#${titleToId(title)}`}
                  className="aspect-ratio__object flex items-center justify-center"
                >
                  {svg && (
                    <InlineSVG
                      className={styles(
                        'fill-archive-brown-400 hov-item-fill-white w60p relative z1 click-through'
                      )}
                      src={svg}
                    />
                  )}
                  <div className="absolute t0 r0 b0 l0 p2 o0p hover-o100p">
                    <img
                      className="o-fit-none w100p h100p circle clip"
                      src={image}
                      style={{ objectPosition: position }}
                      alt={title}
                    />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Speckled>
  );
};

export default SnacksGrid;
