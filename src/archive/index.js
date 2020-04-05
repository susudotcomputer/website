import React from "react";
import Grid from "../components/Grid";
import susuLogo from "../assets/susu-logo.svg";
import { Paragraph, Heading, Span, Em } from "../components/Text";
import Filled from "../components/Filled";
import { projects, projectYears } from "./projectData";
import { Link } from "@reach/router";
import speckled from "../assets/speckled.png";
import nathanHeadshot from "./assets/headshot-nathan.jpg";
import kilianHeadshot from "./assets/headshot-kilian.jpg";
import timelapse from "./assets/timelapse.mp4";
import AutoplayVideo from "../components/AutoplayVideo";
import poloroids from "./assets/poloroids.png";
import Speckled from "../components/Speckled";
import MailchimpForm from "./mailchimpForm";
import styles from "../utils/css";
import { Meta } from "../utils/Meta";
import "./assets/styles.scss";
import { Polaroids } from "./Polaroids";

const PossibleLink = ({ route, children }) => {
  return route ? (
    <Link
      className="text-decoration-none archive-brown-900 hover-black hover-border-bottom hover-border-bottom5px hover-border-bottom15px-md hover-border-black"
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
      <div>
        {started && (
          <Span
            className={styles(
              route ? "" : "black_15",
              "text-uppercase bg-white"
            )}
            kind="vulfpeck"
          >
            {type} &middot; {started}
          </Span>
        )}
      </div>

      <Heading
        level={3}
        kind="rusty"
        className={styles(route ? "" : "black_15", "bg-white inline-block")}
      >
        <PossibleLink route={route}>{title}</PossibleLink>
      </Heading>
    </li>
  );
};

const ProjectSection = ({ group, projects, caveat }) => {
  return (
    <div className="mb10">
      <div className="flex">
        <Heading
          className="archive-beige bg-white inline-block"
          kind="kishibashi"
        >
          {group}
        </Heading>
        {caveat && (
          <div className="left relative flex flex-column justify-between">
            <Span
              className="archive-beige bg-white inline-block"
              kind="kishibashi"
            >
              *
            </Span>
            <Span>{caveat}</Span>
          </div>
        )}
      </div>
      <ul className="pl5">
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
      <Meta
        title="SuSu Studio"
        description="When Kilian and Nathan collide, you get a SuSu."
        url="https://susu.computer/archive"
      />

      <Grid className="pt25vh relative">
        <div className="w101p absolute t0 h50vh fade-white-transparent" />
        <div className="col-10 z10 mb10">
          <img className="w200px mx-auto block" src={susuLogo} />
        </div>

        <Filled className="col-6 col-offset-2 z10 mb20">
          <Heading className="mb3" kind="bigfreedia">
            Hello! Welcome to our archive!
          </Heading>
          <Paragraph kind="danny">
            Susu is the creative output of Kilian and Nathan. Each project was
            done out of the need to go all-in on something completely for fun’s
            sake. Go ahead and browse below around at your leisure.{" "}
            <Em>(We’re working to get everything up here soon enough.)</Em>
          </Paragraph>
        </Filled>
        <div className="col-10">
          <>
            {projectYears.map((year, i) => {
              const projectsByYear = projects.filter((p) => p.year === year);
              const caveat2016 =
                "This is a kind of “proto SuSu” because we weren’t SuSu yet, but working on stuff.";

              return (
                <ProjectSection
                  key={`year-${i}`}
                  group={year}
                  projects={projectsByYear}
                  caveat={year === 2016 && caveat2016}
                />
              );
            })}
            {/* <ProjectSection group={'Things'} projects={things} /> */}
          </>
        </div>
      </Grid>
      <div
        className="bg-archive-beige"
        style={{ backgroundImage: `url(${speckled})`, backgroundSize: "800px" }}
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
            Kilian is from Dublin Ireland. He loves getting absorbed in the
            details, no matter how small. That could be the etymology of a word
            he heard in a song lyric, the perfect recreation of a sandwich from
            a restaurant that he loved but has since gone out of business or
            doing research to ensure the typeface in a historical project is
            period accurate. He is currently a Frontend Designer at Kickstarter
            and was previously at Tito and Úll.
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
        <Filled className="col-6 col-offset-2 mb5">
          <Heading level={3} kind="bigfreedia" className="mb3">
            Visitors to our studio
          </Heading>
          <Paragraph kind="danny">
            If you visit the studio you get your photo on the wall. Them’s the
            rules. We love your faces!
          </Paragraph>
        </Filled>
        <div className="col-10">
          <Polaroids />
        </div>
      </Grid>
      <Speckled grid className="py10 py20-md" backgroundColor="archiveBrown400">
        <div className="col-10 col-4-sm">
          <p className="fz48px fz72px-sm font-mono mb5 mb0-sm">
            Sign up for email from us.
          </p>
        </div>
        <div className="col-10 col-5-sm col-offset-5-sm">
          <MailchimpForm />
        </div>
      </Speckled>
    </>
  );
};

export default Archive;
