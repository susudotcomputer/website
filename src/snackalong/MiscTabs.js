import React from 'react';
import Tabs from '../components/Tabs';
import Filled from '../components/Filled';
import Quiz from './Quiz';
import Trivia from './Trivia';
import Prizes from './Prizes';
import { Heading, Paragraph } from '../components/Text';

const Tab = ({ children }) => {
  return children;
};

const MiscTabs = () => {
  return (
    <>
      <Filled className="col-10 col-4-sm col-offset-3-sm mb10">
        <Heading kind="bigfreedia" className="mb2">
          Pre-show & post-show materials
        </Heading>
        <Paragraph kind="danny" className="mb4">
          Before the movie started we showed a trivia slideshow and afterwards
          we had a quiz with prizes for the eagle-eyed folks in the audience.
        </Paragraph>
      </Filled>
      <Tabs activeTab={1} className="w100p mb20">
        <Tab title="Trivia">
          <Trivia />
        </Tab>
        <Tab title="Quiz">
          <Quiz />
        </Tab>
        <Tab title="Prizes">
          <Prizes />
        </Tab>
      </Tabs>
    </>
  );
};

export default MiscTabs;
