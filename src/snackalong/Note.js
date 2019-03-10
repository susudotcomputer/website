import React from 'react';
import { Paragraph } from '../components/Text';
import arrow from './assets/arrow.svg';
import styles from '../utils/css';

const Note = ({ children, direction = 'rightBelow' }) => {
  const directions = {
    rightBelow: {
      parent: styles('justify-end'),
      arrowDirection: 'scaleY(-1) scaleX(-1)',
      arrowCentering: styles('l-40px'),
      arrowPosition: styles('flex-column'),
      textRotation: 'rotate(5deg)',
      textDirection: styles('text-right')
    },
    leftBelow: {
      arrowDirection: 'scaleY(-1) scaleX(1)',
      arrowCentering: styles('r-30px'),
      arrowPosition: styles('flex-column'),
      textRotation: 'rotate(-5deg)'
    },
    rightAbove: {
      parent: styles('justify-end'),
      arrowDirection: 'scaleX(-1)',
      arrowCentering: styles('l-40px'),
      arrowPosition: styles('flex-column-reverse'),
      textRotation: 'rotate(-5deg)',
      textDirection: styles('text-right')
    },
    leftAbove: {
      arrowCentering: styles('r-30px'),
      arrowPosition: styles('flex-column-reverse'),
      textRotation: 'rotate(-5deg)'
    }
  };

  const {
    parent = '',
    arrowDirection = '',
    arrowCentering = '',
    arrowPosition = '',
    textRotation = '',
    textDirection = ''
  } = directions[direction];

  return (
    <div className={styles('flex', parent)}>
      <div className={styles('relative flex items-center', arrowPosition)}>
        <Paragraph
          kind="moon"
          className={styles(
            'archive-yellow relative inline-block mb2',
            textDirection
          )}
          style={{ transform: textRotation }}
        >
          {children}
        </Paragraph>
        <img
          src={arrow}
          alt="hand drawn arrow"
          className={styles('w80px relative', arrowCentering)}
          style={{ transform: arrowDirection }}
        />
      </div>
    </div>
  );
};

export default Note;
