import React from 'react';
import { Paragraph, Heading } from '../components/Text';
import Filled from '../components/Filled';
import Note from './Note';

const WhatIs = () => {
  return (
    <>
      <div className="col-6 col-offset-2">
        <Note direction="rightBelow">Okey, here we go.</Note>
      </div>
      <Filled className="col-6 col-offset-2 mb20">
        <Heading kind="bigfreedia" className="mb4">
          What is a Snackalong???
        </Heading>
        <Paragraph kind="danny" className="mb4">
          You’ve heard of a sing-a-long—... well, a snackalong is when you watch
          a film, and eat everything the characters are eating. For our
          inaugural event we chose a favorite film for both of us with tons of
          snacks: Ocean’s Eleven. It was a very thorough event: anything that
          touched Brad Pitt’s mouth, touched the audience’s mouth…... all 19
          things. And we should mention upfront— this is not a balanced meal, in
          sustenance or timing. In the beginning items come fast and sometimes
          they’re 30 minutes apart.
        </Paragraph>
        <Paragraph kind="danny" className="mb4">
          We had a great time making this event. Obsessing over every detail in
          the movie and bringing it to life for one special night. But
          Snackalong is more than a meal. It’s an joyful and celebratory
          experience and we worked hard to get all of details right along the
          way... Snackalong is knowing that the teacup in the diner scene is a
          Syracuse China Strawberry Hill print. Snackalong is receiving a gift
          pack with Danny’s wedding ring in to match what he gets when released
          from prison. Snackalong is ending the night with our very own fountain
          scene that doesn’t come close to rivaling the Bellagio’s show. We had
          a great time making this event. Obsessing over every detail in the
          movie and bringing it to life for one special night.
        </Paragraph>
      </Filled>
    </>
  );
};

export default WhatIs;
