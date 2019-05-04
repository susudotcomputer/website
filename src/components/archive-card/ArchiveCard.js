import React from 'react';
import styles from '../../utils/css';
import logoSrc from '../../assets/susu-logo.svg';
import { Heading, Span } from '../Text';
import Tactics from './Tactics';
import speckles from '../../assets/speckled.png';
import Perforation from '../Perforation';

const InfoItem = ({ label, text, className }) => {
  return (
    <Heading
      level="2"
      className={styles(
        'archive-brown-400 border1px border-bottom border-black_30 mb1',
        `archive-card__${label.toLowerCase()}`,
        className
      )}
    >
      <Span className="black_30 text-uppercase mr1" kind="vulfpeck">
        {label}:
      </Span>
      <Span kind="chromesparks">{text}</Span>
    </Heading>
  );
};

const ArchiveCard = ({ project, location, medium, date, budget, tactics }) => {
  return (
    <div
      className="archive-card bg-archive-beige p5 relative"
      style={{ backgroundImage: `url(${speckles})`, backgroundSize: '600px' }}
    >
      <Perforation direction="up" />
      <div className="archive-card__logo flex">
        <img
          src={logoSrc}
          className="w100px w-auto-md o10p h100p m-auto"
          alt="SuSu Logo"
        />
      </div>
      <div className="archive-card__primary-info mb1">
        <InfoItem label="Project" text={project} />
        <InfoItem label="Location" text={location} />
        <InfoItem label="Medium" text={medium} />
        <InfoItem label="Date" text={date} className="word-keep" />
        <InfoItem label="Budget" text={budget} className="" />
      </div>
      <Tactics allTactics={tactics} />
      <Perforation direction="down" />
    </div>
  );
};

export default ArchiveCard;
