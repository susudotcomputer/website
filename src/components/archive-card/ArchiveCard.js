import React from "react";
import styles from "../../utils/css";
import logoSrc from "../../assets/susu-logo.svg";
import { Heading, Span, Paragraph } from "../Text";
import speckles from "../../assets/speckled.png";
import Perforation from "../Perforation";
import SVG from "react-inlinesvg";

const InfoItem = ({ label, text, className }) => {
  return (
    <Heading
      level="2"
      className={styles(
        "archive-brown-400 border1px border-bottom border-black_20",
        `archive-card__${label.toLowerCase()}`,
        className
      )}
    >
      <Span className="archive-brown-900 text-uppercase mr1" kind="vulfpeck">
        {label}:
      </Span>
      <Span kind="chromesparks">{text}</Span>
    </Heading>
  );
};

const ArchiveCard = ({ project, medium, date, tactics }) => {
  return (
    <div
      className="archive-card bg-archive-beige p5 relative"
      style={{ backgroundImage: `url(${speckles})`, backgroundSize: "600px" }}
    >
      <Perforation direction="up" />
      <div className="archive-card__logo flex mb3 mb0-md">
        <SVG
          className="block o65p w100px m-auto fill-archive-brown-900"
          src={logoSrc}
        />
      </div>
      <div className="archive-card__primary-info">
        <InfoItem label="Project" text={project} />
        <InfoItem label="Type" text={medium} />
        <InfoItem label="Date" text={date} className="word-keep" />
      </div>
      <div className="hide block-sm relative">
        <div className="absolute t0 l0 r0 b0 clip">
          <div className="border1px border-bottom border-black_20 h34px" />
          <div className="border1px border-bottom border-black_20 h34px" />
          <div className="border1px border-bottom border-black_20 h34px" />
          <div className="border1px border-bottom border-black_20 h34px" />
          <div className="border1px border-bottom border-black_20 h34px" />
        </div>
        <Paragraph level="3" kind="vulfpeck" className="mb1">
          <Span
            kind="vulfpeck"
            className="text-uppercase archive-brown-900 lh34px"
          >
            Methods:{" "}
          </Span>
          <Span kind="chromesparks" className="archive-brown-400 lh34px">
            {tactics.join(", ")}
          </Span>
        </Paragraph>
      </div>
      <Perforation direction="down" />
    </div>
  );
};

export default ArchiveCard;
