import React from 'react';
import Filled from '../components/Filled';
import { Paragraph, Heading } from '../components/Text';
import Grid from '../components/Grid';

const Poster = ({ className }) => {
  return (
    <Grid className={className}>
      <Filled className="col-4 col-offset-3">
        <Heading kind="bigfreedia" className="mb4">
          Gift pack for attendees
        </Heading>
        <Paragraph kind="reuben" className="mb4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        </Paragraph>
      </Filled>
    </Grid>
  );
};

export default Poster;
