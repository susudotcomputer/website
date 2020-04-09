import React from "react";
import Grid from "../components/Grid";
import susuLogo from "../assets/susu-logo.svg";
import { Paragraph, Heading, Span, Em } from "../components/Text";
import Filled from "../components/Filled";
import { projects, projectYears } from "./projectData";
import { Link } from "@reach/router";
import speckled from "../assets/speckled.png";
import timelapse from "./assets/timelapse.mp4";
import AutoplayVideo from "../components/AutoplayVideo";
import Speckled from "../components/Speckled";
import MailchimpForm from "./mailchimpForm";
import styles from "../utils/css";
import { Meta } from "../utils/Meta";
import "./assets/styles.scss";
import { Polaroids } from "./Polaroids";
import { Bios } from "./Bios";

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
      <div className="mb-1 z1 relative">
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
          <Paragraph kind="danny" className="mb3">
            Susu is the creative partnership of Kilian & Nathan. Every project
            we create is a challenge to go all-in completely for the sake of
            fun; to not stop building until we’re exhausted and grinning
            ear-to-ear. We focus on getting every detail right, bring joy into
            the world, and leaving plenty of easter eggs along the way.
          </Paragraph>
          <Paragraph kind="danny">
            <Em>
              P.S. We’re working to get everything up on the site soon enough.
            </Em>
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
          <div className="col-10 clip">
            <AutoplayVideo
              src={timelapse}
              className="o-fit-cover w100p h100p"
            />
          </div>
        </Grid>
      </div>

      <Bios />

      <Grid className="py20">
        <Filled className="col-6 col-offset-2 mb5">
          <Heading level={3} kind="bigfreedia" className="mb3">
            Visitors to our Long Island City studio
          </Heading>
          <Paragraph kind="danny">
            There is a simple rule: when you visit the studio you get a photo on
            the wall. These are our spoils to date:
          </Paragraph>
        </Filled>
        <div className="col-10">
          <Polaroids />
        </div>
      </Grid>
      <Speckled grid className="py10 py20-md" backgroundColor="archiveBrown400">
        <div className="col-10 col-4-sm archive-beige">
          <Heading className="mb3" kind="bigfreedia">
            We Have News(usu)letter
          </Heading>
          <Paragraph kind="danny">
            We send a cute little note when we have something great to show you.
            Our guess is there will be like, 2 a year? Very easy commitment on
            your end.
          </Paragraph>
        </div>
        <div className="col-10 col-5-sm col-offset-5-sm">
          <MailchimpForm />
        </div>
      </Speckled>
      <Grid className="py40">
        <Filled className="col-6 col-offset-2 z10">
          <Heading className="mb3" kind="bigfreedia">
            Okay, that’s it.
          </Heading>
          <Paragraph kind="danny">
            You’re done, this is the bottom… our entire archive to date. Thanks
            for stopping by, it was very thoughtful of you. We love hearing from
            folks— please{" "}
            <Link bold to="mailto:email@susu.computer">
              email a hello!
            </Link>
          </Paragraph>
        </Filled>
      </Grid>
      <Grid>
        <div className="col-10 py10 text-center">
          <Link className=" fz38px" to="/phil">
            🏭
          </Link>
        </div>
      </Grid>
    </>
  );
};

export default Archive;
