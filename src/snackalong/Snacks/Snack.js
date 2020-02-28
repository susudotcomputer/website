import React from "react";
import { Heading, Li } from "../../components/Text";
import stopwatch from "../assets/stopwatch.svg";
import AutoplayVideo from "../../components/AutoplayVideo";
import { titleToId } from "../../utils/links";
import styles from "../../utils/css";
import { useIntersectionObserver } from "../../hooks/useObserver";

const borderWidth = styles("border1px border-medium-md");

const Vessel = ({ vesselList }) => {
  const vesselClassNames = styles(
    "snack__vessel white border-top border-right-lg border-archive-brown-400",
    borderWidth
  );
  return (
    <div className={vesselClassNames}>
      <div className="p2">
        <Heading kind="chromesparks" className="text-uppercase" bold>
          Vessel
        </Heading>
        <ul>
          {vesselList.map((item, i) => (
            <Li kind={"danny"} key={i}>
              {item}
            </Li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Food = ({ kindList, kind }) => {
  const kindClassNames = styles(
    "snack__food white border-top border-right border-x-lg border-archive-brown-400",
    borderWidth
  );
  return (
    <div className={kindClassNames}>
      <div className="border-archive-brown-400 p2">
        <Heading kind="chromesparks" className="text-uppercase" bold>
          {kind}
        </Heading>
        <ul style={{ columns: "20ch" }}>
          {kindList.map((item, i) => (
            <Li kind="danny" key={i}>
              {item}
            </Li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TimeStamp = ({ time }) => {
  const timeStampClassNames = styles(
    "snack__timestamp border-top border-archive-brown-400",
    borderWidth
  );
  return (
    <div className={timeStampClassNames}>
      <div className="flex items-center">
        <img src={stopwatch} className="h40px w40px relative t-2px mr1" />
        <Heading kind="bigfreedia" level={3} className="white py2 lh36px">
          {time}
        </Heading>
      </div>
    </div>
  );
};

const NeonSnack = ({ image, didIntersect }) => {
  return (
    <div className="snack__neon py2 pl2 hide flex-lg">
      <div className="m-auto w100p">
        <div className="aspect-ratio aspect-ratio--1x1 clip">
          <img
            className="max-w100p h100p o-fit-contain aspect-ratio__object"
            src={didIntersect ? image : ""}
          />
        </div>
      </div>
    </div>
  );
};

const Clip = ({ clip, clipPosition, poster, didIntersect }) => {
  const clipClassNames = styles(
    "snack__clip pb2 pt2 pl2 border-bottom-lg border-archive-brown-400 clip",
    borderWidth
  );
  return (
    <div className={clipClassNames}>
      <div className="aspect-ratio aspect-ratio--4x3 aspect-ratio--16x9-lg clip">
        <div
          className="aspect-ratio__object"
          style={{
            backgroundImage: `url(${didIntersect ? poster : ""}`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <AutoplayVideo
          src={didIntersect ? clip : ""}
          className="w100p h100p aspect-ratio__object"
          style={{ objectFit: "cover", objectPosition: clipPosition }}
        />
      </div>
    </div>
  );
};

const Photo = ({ image, didIntersect }) => {
  const photoClassNames = styles(
    "snack__photo pr2 py2 border-right border-archive-brown-400",
    borderWidth
  );
  return (
    <div className={photoClassNames}>
      <div className="aspect-ratio aspect-ratio--4x3">
        <img
          className="max-w100p o-fit-cover h100p aspect-ratio__object"
          src={didIntersect ? image : ""}
        />
      </div>
    </div>
  );
};

const Title = ({ text, index }) => {
  const titleClassNames = styles(
    "py2 white snack__title border-bottom border-right-lg border-archive-brown-400 flex items-center",
    borderWidth
  );
  return (
    <Heading kind="jonhopkins" className={titleClassNames}>
      <div className="self-stretch flex items-center bg-archive-brown-400 px2 py3 mr3">
        <span className="fz38px flex-none">#</span>
        <span className="flex-none">{index}</span>
      </div>
      <span>{text}</span>
    </Heading>
  );
};

const Snack = ({
  title,
  index,
  timeStamp,
  clip,
  clipPosition,
  image,
  neonImage,
  kind,
  kindList,
  vesselList,
  poster
}) => {
  const { targetRef, didIntersect } = useIntersectionObserver({
    rootMargin: "100%"
  });
  const snackClassNames = styles(
    "snack relative border-y border-archive-brown-400",
    borderWidth
  );
  return (
    <div
      ref={targetRef}
      id={titleToId(title)}
      className="col-10 pt2vh-md mb2-md mt-1px mt8vh-md "
    >
      <div className={snackClassNames}>
        <Title text={title} index={index} />
        <Photo image={image} didIntersect={didIntersect} />
        <TimeStamp time={timeStamp} />
        <Food kind={kind} kindList={kindList} />
        <Vessel vesselList={vesselList} />
        <Clip
          clip={clip}
          clipPosition={clipPosition}
          poster={poster}
          didIntersect={didIntersect}
        />
        <NeonSnack image={neonImage} didIntersect={didIntersect} />
      </div>
    </div>
  );
};

export default Snack;
