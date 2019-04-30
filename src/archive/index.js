import React from 'react';
import Grid from '../components/Grid';
import susuLogo from '../assets/susu-logo.svg';
import { Paragraph, Heading, Span } from '../components/Text';
import Filled from '../components/Filled';
import { projects, projectYears, things } from './projectData';
import { Link } from '@reach/router';
import speckled from '../assets/speckled.png';
import nathanHeadshot from './assets/headshot-nathan.jpg';
import kilianHeadshot from './assets/headshot-kilian.jpg';
import timelapse from './assets/timelapse.mp4';
import AutoplayVideo from '../components/AutoplayVideo';
import poloroids from './assets/poloroids.png';
import Speckled from '../components/Speckled';
import MailchimpForm from './mailchimpForm';

const PossibleLink = ({ route, children }) => {
  return route ? (
    <Link
      className="text-decoration-none archive-brown-900 hover-archive-brown-400 hover-text-underline"
      to={route}
    >
      {children}
    </Link>
  ) : (
    children
  );
};

const ProjectItem = ({ type, started, title, route }) => {
  return (
    <li className="mb5">
      {started && (
        <Span className="text-uppercase bg-white" kind="vulfpeck">
          {type} &middot; {started}
        </Span>
      )}

      <Heading level={3} kind="rusty">
        <PossibleLink route={route}>{title}</PossibleLink>
      </Heading>
    </li>
  );
};

const ProjectSection = ({ group, projects }) => {
  return (
    <div className="mb10">
      <Heading
        className="archive-beige bg-white inline-block"
        kind="kishibashi"
      >
        {group}
      </Heading>
      <ul>
        {projects.map((project, i) => {
          return <ProjectItem key={`project-${i}`} {...project} />;
        })}
      </ul>
    </div>
  );
};

const Archive = () => {
  return (
    <>
      <Grid className="pt25vh relative">
        <div className="w101p absolute t0 h50vh fade-white-transparent" />
        <div className="col-10 z10 mb10">
          <img className="w200px mx-auto block" src={susuLogo} />
        </div>
        <Filled className="col-6 col-offset-2 z10 mb20">
          <Heading className="mb3" kind="bigfreedia">
            Hello, and welcome to our archive!
          </Heading>
          <Paragraph kind="danny">
            Below is all the complete work of Kilian and Nathan as SuSu. Each
            project was done out of the need to go all-in on something
            completely for fun’s sake. Browse around at your leisure.
          </Paragraph>
        </Filled>
        <div className="col-10">
          <>
            {projectYears.map((year, i) => {
              const projectsByYear = projects.filter(p => p.year === year);
              return (
                <ProjectSection
                  key={`year-${i}`}
                  group={year}
                  projects={projectsByYear}
                />
              );
            })}
            <ProjectSection group={'Things'} projects={things} />
          </>
        </div>
      </Grid>
      <div
        className="bg-archive-brown-900"
        style={{ backgroundImage: `url(${speckled})`, backgrounSize: '600px' }}
      >
        <Grid lines={false} className="py10">
          <div className="col-10 aspect-ratio aspect-ratio--16x9">
            <AutoplayVideo src={timelapse} className="aspect-ratio__object" />
          </div>
        </Grid>
      </div>
      <Grid className="pt20 pb10">
        <Filled className="col-5">
          <Span kind="bigfreedia" className="block mb3">
            Kilian McMahon (Su)
          </Span>
          <Paragraph kind="danny">
            Nathan is from the Bay Area and went to school for history and
            theatre. He’s a proud leftie? He loves emoji and helped create the
            upcoming truck emoji. He likes to create traditions, then continue
            them forever. He thinks collaboration is the closest humans can get
            to magic. Here is a list of his favorite things: outer space,
            podcasts, buddhism, long train ride, vegetarianism, live music,
            minimalism, and improv. He currently works on creative in the Warren
            2020 campaign— previously he was a creative director at Blue State
            Digital, the art director at Funny Or Die and a waiter at Outback
            Steakhouse.
          </Paragraph>
        </Filled>

        <Filled className="col-5">
          <Span kind="bigfreedia" className="block mb3">
            Nathan Maggio (Su)
          </Span>
          <Paragraph kind="danny">
            Nathan is from the Bay Area and went to school for history and
            theatre. He’s a proud leftie? He loves emoji and helped create the
            upcoming truck emoji. He likes to create traditions, then continue
            them forever. He thinks collaboration is the closest humans can get
            to magic. Here is a list of his favorite things: outer space,
            podcasts, buddhism, long train ride, vegetarianism, live music,
            minimalism, and improv. He currently works on creative in the Warren
            2020 campaign— previously he was a creative director at Blue State
            Digital, the art director at Funny Or Die and a waiter at Outback
            Steakhouse.
          </Paragraph>
        </Filled>
      </Grid>
      <Grid>
        <Filled className="col-5">
          <img className="lh0" src={kilianHeadshot} />
        </Filled>
        <Filled className="col-5">
          <img className="lh0" src={nathanHeadshot} />
        </Filled>
      </Grid>

      <Grid className="py20">
        <Filled className="col-6 col-offset-2">
          <Heading level={3} kind="bigfreedia" className="mb3">
            Visitors to our studio
          </Heading>
          <Paragraph kind="danny">
            If you visit the studio you get your photo on the wall. Them’s the
            rules. We love your faces!
          </Paragraph>
        </Filled>

        <img src={poloroids} className="col-10" />
      </Grid>
      <Speckled grid className="pt20">
        <div className="col-5">
          <Paragraph>Sign up for email from us.</Paragraph>
        </div>
        <div className="col-5">
          <MailchimpForm />
        </div>
      </Speckled>
    </>
  );
};

export default Archive;
