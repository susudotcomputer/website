import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';
import { Button } from '../components/Buttons';
import castImage from '../assets/oceans-cast-transparent.png';
import balloons from './assets/balloons.png';
import bff from './assets/bff.jpg';
import email from './assets/email.svg';
import instagram from './assets/instagram.svg';
import SVG from 'react-inlinesvg';
import Note from './Note';
import Filled from '../components/Filled';
import Speckled from '../components/Speckled';

const Ending = () => {
  return (
    <>
      <Grid className="pt10">
        <div className="col-8 col-offset-1 col-offset-2-md col-4-md p2 bg-archive-beige lh0 rotate-3 mb-35p">
          <img src={bff} />
        </div>
        <div className="col-3 ">
          <Note>
            This is the one photo we have of us from the night. Two handsome
            boys&nbsp;in&nbsp;SuSuits.
          </Note>
        </div>
      </Grid>
      <div className="relative">
        <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
          <div className="max-w1200px bg-gridient h100p mx-auto" />
        </div>
        <div className="mx-auto max-w1400px lh0">
          <img className="" src={balloons} />
        </div>
      </div>
      <Grid className="py20">
        <Filled className="col-10 col-6-sm col-offset-2-sm mb10">
          <Heading kind="bigfreedia" className="mb2">
            Have any questions / comments?
          </Heading>
          <Paragraph kind="danny" className="mb4">
            Wow, you got to the very very very end of this site. Thank you! If
            you wanna reach out and say hey… please do! We love hearing from
            folks.
          </Paragraph>
        </Filled>
        <div className="col-10 col-6-sm col-offset-2-sm col-6-lg col-offset-2-lg flex flex-column flex-row-md justify-around items-start-md mb3">
          <Button
            href="https://instagram.com/susudotcomputer"
            className="relative flex items-center pl4 pr5 mb5 mb0-lg justify-center"
            size="medium"
          >
            <SVG
              className="fill-archive-brown-900 hov-item-fill-archive-beige w30px h30px mr2 inline-block"
              src={instagram}
            />
            Follow on Instagram
          </Button>
          <Button
            href="mailto:email@susu.computer"
            className="relative flex items-center pl4 pr5 justify-center"
            size="medium"
          >
            <SVG
              className="fill-archive-brown-900 hov-item-fill-archive-beige w30px h30px mr2 inline-block"
              src={email}
            />
            Say hello via email
          </Button>
        </div>
        <div className="col-3 col-offset-1">
          <Note direction="leftAbove">
            If you know Steven Soderbergh can you DM us immediately!
          </Note>
        </div>
      </Grid>

      <div className="relative">
        <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
          <div className="max-w1200px bg-gridient h100p mx-auto " />
        </div>
        <div>
          <Grid>
            <div className="col-10 col-6-sm col-offset-2-sm col-4-md col-offset-3-md h80px mb10 children-bg-archive-brown-900">
              <Speckled className="p2 h98px">
                <iframe
                  src="https://open.spotify.com/embed/track/3Vo5NwAezmRMP2aH2xQVm1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="encrypted-media"
                />
              </Speckled>
            </div>
          </Grid>
          <Grid className="mb-15vw">
            <div className="col-3-md col-offset-4-md">
              <Note direction="centerAboveFlip">
                The movie ends with this song, and so does this web page. Bye!
              </Note>
            </div>
          </Grid>
        </div>
        <div className="lh0">
          <img className="w100p" src={castImage} />
        </div>
      </div>
    </>
  );
};

export default Ending;
