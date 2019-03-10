import React from 'react';
import Tabs from '../components/Tabs';
import Quiz from './Quiz';

const Tab = ({ children }) => {
  return children;
};

const MiscTabs = () => {
  return (
    <Tabs className="mb20">
      <Tab title="Trivia">Trivia</Tab>
      <Tab title="Quiz">
        <Quiz />
      </Tab>
      <Tab title="Score Cards">Score Cards</Tab>
      <Tab title="Prizes">Prizes</Tab>
    </Tabs>
  );
};

export default MiscTabs;
