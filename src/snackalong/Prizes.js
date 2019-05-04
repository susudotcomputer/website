import React from 'react';
import prize1 from './assets/prizes/prize-1.jpg';
import prize2 from './assets/prizes/prize-2.jpg';
import prize3 from './assets/prizes/prize-3.jpg';
import { Span, Paragraph, Strong, Em } from '../components/Text';
import styles from '../utils/css';
import Grid from '../components/Grid';

const Badge = ({ className, children }) => {
  const allClassNames = styles(
    className,
    'circle p3 w80px h80px archive-beige bg-archive-brown-400 flex justiy-center items-center'
  );
  return (
    <Span kind="bigfreedia" className={allClassNames}>
      {children}
    </Span>
  );
};

const Prizes = () => {
  return (
    <Grid lines={false}>
      <div className="col-10 col-8-sm col-offset-1-sm col-6-md col-offset-2-md py8 px5">
        <Paragraph kind="danny">
          The prizes are all scavenged from Etsy n’ shit.{' '}
          <Strong kind="danny">First place</Strong> was a (potentially real)
          signed photo of Elliott Gould.{' '}
          <Strong kind="danny">Second place</Strong> was Scott Cann’s coffee
          table photography book. (Tons of nudes in it, FYI) And{' '}
          <Strong kind="danny">third place</Strong> was a notebook made from an
          <Em>Ocean’s Eleven</Em> VHS cover.
        </Paragraph>
      </div>
      <div className="col-10 flex">
        <div className="flex1 mr6 relative">
          <Badge className="absolute l-2 t-2">#2</Badge>
          <img src={prize1} />
        </div>
        <div className="flex1 flex flex-column justify-between">
          <div className="aspect-ratio aspect-ratio--16x9">
            <div className="aspect-ratio__object">
              <Badge className="absolute r-2 t-2">#1</Badge>
              <img className="w100p h100p o-fit-cover" src={prize2} />
            </div>
          </div>
          <div className="aspect-ratio aspect-ratio--16x9">
            <div className="aspect-ratio__object">
              <Badge className="absolute r-2 t-2">#3</Badge>
              <img className="w100p h100p o-fit-cover" src={prize3} />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Prizes;
