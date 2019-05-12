import React from 'react';
import Tabs from '../components/Tabs';
import Filled from '../components/Filled';
import Quiz from './Quiz';
import Trivia from './Trivia';
import Prizes from './Prizes';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';
import styles from '../utils/css';
import { textGapBottom } from '../constants';

const Tab = ({ children }) => {
  return children;
};

const MiscTabs = ({ className }) => {
  return (
    <Grid className={className}>
      <Filled
        className={styles(
          'col-10 col-8-sm col-offset-1-sm col-6-md col-offset-2-md',
          textGapBottom
        )}
      >
        <Heading kind="bigfreedia" className="mb2">
          Pre-show & post-show materials
        </Heading>
        <Paragraph kind="danny">
          Before the movie started we showed a trivia slideshow and afterwards
          we had a quiz with prizes for the eagle-eyed folks in the audience.
        </Paragraph>
      </Filled>
      <Tabs activeTab={2} className="w100p">
        <Tab title="Quiz">
          <Quiz />
        </Tab>
        <Tab title="Prizes">
          <Prizes />
        </Tab>
        <Tab title="Trivia">
          <Trivia />
        </Tab>
      </Tabs>
    </Grid>
  );
};

export default MiscTabs;
