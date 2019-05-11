import React from 'react';
import { Heading, Paragraph, Em } from '../components/Text';
import Speckled from '../components/Speckled';
import styles from '../utils/css';
import InlineSVG from 'react-inlinesvg';
import snacks from './Snacks/snackdata';
import { titleToId } from '../utils/links';
import Perforation from '../components/Perforation';

const blankItem = {
  svg: '',
  photo: ''
};

const snacksArr = [...snacks, blankItem, blankItem];

const SnacksGrid = () => {
  return (
    <Speckled grid className="pt20 pb20vw relative">
      <Perforation direction="up" />
      <div className="col-10 col-8-sm col-offset-1-sm col-6-md col-offset-2-md mb10 px1 px5-sm">
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
          or timing. In the beginning items come <Em>fast</Em> and sometimes
          they’re 30 minutes apart.
        </Paragraph>
      </div>

      <div className="col-10 relative">
        <ul className="w100p mx-auto snackalong__snacks">
          {snacksArr.map(({ svg, image, position, title }, i) => {
            const wrapperClassnames = styles(
              'aspect-ratio aspect-ratio--1x1 hov-target',
              i > 14 && i < 17
                ? 'border-bottom-width-none border-bottom-md'
                : '',
              i >= 18 ? 'hide block-md' : ''
            );
            return (
              <li key={i} className={wrapperClassnames}>
                <a
                  href={title ? `#${titleToId(title)}` : null}
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
                    {image && (
                      <img
                        className="o-fit-none w100p h100p circle clip"
                        src={image}
                        style={{ objectPosition: position }}
                        alt={title}
                      />
                    )}
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
