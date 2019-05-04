import React from 'react';
import { Heading, Span } from '../Text';
import styles from '../../utils/css';
import { camelToSentence } from '../../utils/text';

const dotPositions = [
  styles('t1px l1px'),
  styles('b-1px r1px'),
  styles('b1px l1px'),
  styles('b1px l1px'),
  styles('t1px r0px'),
  styles('t1px l0px'),
  styles('t0px l1px')
];

const randomNumber = num => {
  return Math.round(Math.random() * num);
};

const TacticStamp = ({ stamped }) => {
  const wrapperClasses = styles(
    'circle w16px h16px border border1px border-black_50 inline-flex mr2 relative'
  );
  const direction = dotPositions[randomNumber(dotPositions.length)];
  const dotClasses = styles(
    direction,
    'relative w13px h13px circle m-auto',
    stamped ? 'bg-archive-brown-400' : ''
  );
  return (
    <span className={wrapperClasses}>
      <span className={dotClasses} />
    </span>
  );
};

const TacticItem = ({ stamped, title }) => {
  return (
    <li className="flex mb3px">
      <TacticStamp stamped={stamped} />
      <Span kind="vulfpeck">{camelToSentence(title)}</Span>
    </li>
  );
};

const Tactics = ({ allTactics }) => {
  return (
    <div className="hide block-sm">
      <Heading
        level="3"
        kind="vulfpeck"
        className="text-uppercase black_30 mb1"
      >
        Tactics:
      </Heading>
      <ul className="archive-card__tactics-list">
        {Object.keys(allTactics).map((tactic, i) => {
          const stamped = allTactics[tactic];
          return (
            <TacticItem
              key={`${tactic}-${i}`}
              title={tactic}
              stamped={stamped}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tactics;
