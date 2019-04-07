import React from 'react';
import { Heading } from '../../components/Text';
import stopwatch from '../assets/stopwatch.svg';
import AutoplayVideo from '../../components/AutoplayVideo';
import { titleToId } from '../../utils/links';

const Vessel = ({ vesselList }) => (
  <div className="snack__vessel archive-beige border-top border-right border-archive-brown-400 border-medium">
    <div className="pl2 pt2">
      <Heading kind="danny" className="text-uppercase" bold>
        Vessel
      </Heading>
      <ul>
        {vesselList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Food = ({ kindList, kind }) => (
  <div className="snack__food archive-beige border-top border-x border-archive-brown-400 border-medium">
    <div className="border-archive-brown-400 pt2 pl2">
      <Heading kind="danny" className="text-uppercase" bold>
        {kind}
      </Heading>
      <ul>
        {kindList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const TimeStamp = ({ time }) => (
  <div className="snack__timestamp border-top border-archive-brown-400 border-medium">
    <div className="flex items-center">
      <img src={stopwatch} className="h40px w40px relative t-2px" />
      <Heading kind="bigfreedia" level={3} className="archive-beige py2">
        {time}
      </Heading>
    </div>
  </div>
);

const NeonSnack = ({ image }) => {
  return (
    <div className="snack__neon py2 pl2">
      <img className="max-w100p h100p o-fit-contain" src={image} />
    </div>
  );
};

const Clip = ({ clip, clipPosition }) => {
  return (
    <div className="snack__clip pb2 pt2 pl2 border-bottom border-archive-brown-400 border-medium clip">
      <div className="aspect-ratio aspect-ratio--16x9">
        <AutoplayVideo
          src={clip}
          className="w100p h100p aspect-ratio__object"
          style={{ objectFit: 'cover', objectPosition: clipPosition }}
        />
      </div>
    </div>
  );
};

const Photo = ({ image }) => (
  <div className="snack__photo pr2 py2 border-right border-archive-brown-400 border-medium">
    <img className="max-w100p o-fit-cover h100p" src={image} />
  </div>
);

const Title = ({ text, index }) => (
  <Heading
    kind="jonhopkins"
    className="py2 archive-beige snack__title border-bottom border-right border-archive-brown-400 border-medium flex items-center"
  >
    <span className="self-stretch flex items-center bg-archive-brown-400 px1 mr3">
      {`#${index}`}
    </span>
    <span>{text}</span>
  </Heading>
);

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
  vesselList
}) => {
  return (
    <div
      id={titleToId(title)}
      className="snack col-10 relative border-y border-archive-brown-400 border-medium mb2 mt10vh"
    >
      <div className="snack__main">
        <Title text={title} index={index} />
        <Photo image={image} />
        <TimeStamp time={timeStamp} />
        <Food kind={kind} kindList={kindList} />
        <Vessel vesselList={vesselList} />
      </div>
      <Clip clip={clip} clipPosition={clipPosition} />
      <NeonSnack image={neonImage} />
    </div>
  );
};

export default Snack;
