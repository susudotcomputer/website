import React from 'react';
import logoSrc from './assets/susu-logo.svg';
import styles from './css';
import { Heading, Span } from './Text';

const GridLines = ({ children }) => {
  return <div className="max-w1400px mx-auto bg-gridient">{children}</div>;
};

const InfoItem = ({ label, text }) => {
  return (
    <Heading
      level="2"
      style="H200"
      className={styles(
        'archive-brown-400',
        `archive-card__${label.toLowerCase()} font-mono`
      )}
    >
      <Span className="black_50 text-uppercase" style="H300">
        {label}
      </Span>
      {text}
    </Heading>
  );
};

const ArchiveCard = () => {
  return (
    <div className="archive-card bg-archive-beige p5 col-6 col-offset-3">
      <div className="archive-card__logo">
        <img src={logoSrc} alt="" />
      </div>
      <div className="archive-card__primary-info">
        <InfoItem label="Project" text="Snackalong:Ocean's Eleven" />
        <InfoItem label="Location" text="Brooklyn, NY" />
        <InfoItem label="Medium" text="Event" />
        <InfoItem label="Date" text="2018-06-30" />
        <InfoItem label="Budget" text="n/a" />
      </div>
      <div className="archive-card__tactics">
        <h3>Tactics used:</h3>
        <ul className="archive-card__tactics-list">
          <li>Visual design</li>
          <li>Web development</li>
          <li>Cooking</li>
          <li>Branding</li>
          <li>Photography</li>
          <li>Hosting</li>
          <li>Copy writing</li>
          <li>Video</li>
          <li>Illustration</li>
          <li>Carpentry</li>
          <li>Print</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  );
};

const Snackalong = () => {
  return (
    <GridLines>
      <ArchiveCard />
    </GridLines>
  );
};

export default Snackalong;
