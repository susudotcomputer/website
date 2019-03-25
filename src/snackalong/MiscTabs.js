import React from 'react';
import Tabs from '../components/Tabs';
import Quiz from './Quiz';
import Trivia from './Trivia';
import Prizes from './Prizes';

const Tab = ({ children }) => {
  return children;
};

const MiscTabs = () => {
  return (
    <Tabs activeTab={3} className="mb20">
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
  );
};

export default MiscTabs;
