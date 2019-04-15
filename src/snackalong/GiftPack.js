import React, { useState } from 'react';
import Filled from '../components/Filled';
import { Paragraph, Heading } from '../components/Text';
import Grid from '../components/Grid';

import airfreshner from './assets/pack/airfreshner.png';
import card1 from './assets/pack/card1.png';
import card2 from './assets/pack/card2.png';
import envelope from './assets/pack/envelope.png';
import menu1 from './assets/pack/menu1.png';
import menu2 from './assets/pack/menu2.png';
import poster from './assets/pack/poster.png';
import ring from './assets/pack/ring.png';
import sticker from './assets/pack/sticker.png';
import styles from '../utils/css';

const Toggle = props => {
  const [visibleItem, setIsVisible] = useState(0);
  const toggleVisibility = () => {
    setIsVisible(visibleItem === 0 ? 1 : 0);
  };

  const allClasses = styles('relative', props.className);

  return (
    <div className={allClasses}>
      {props.children.map((child, i) => {
        const combinedClasses = styles(
          child.props.className,
          't0 l0 pointer',
          visibleItem === i ? 'o100p' : 'absolute o0p'
        );
        return React.cloneElement(child, {
          ...child.props,
          key: `toggle-item-${i}`,
          className: combinedClasses,
          onClick: toggleVisibility
        });
      })}
    </div>
  );
};

const Poster = ({ className }) => {
  return (
    <Grid className={className}>
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
        <img className="rotate5 relative" src={envelope} />
      </div>
    </Grid>
  );
};

export default Poster;
