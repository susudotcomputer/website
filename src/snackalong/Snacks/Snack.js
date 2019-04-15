import React from 'react';
import { Heading, Li } from '../../components/Text';
import stopwatch from '../assets/stopwatch.svg';
import AutoplayVideo from '../../components/AutoplayVideo';
import { titleToId } from '../../utils/links';

const Vessel = ({ vesselList }) => (
  <div className="snack__vessel white border-top border-right-lg border-archive-brown-400 border-medium">
    <div className="p2">
      <Heading kind="chromesparks" className="text-uppercase" bold>
        Vessel
      </Heading>
      <ul>
        {vesselList.map((item, i) => (
          <Li kind={'danny'} key={i}>
            {item}
          </Li>
        ))}
      </ul>
    </div>
  </div>
);

const Food = ({ kindList, kind }) => (
  <div className="snack__food white border-top border-right border-x-lg border-archive-brown-400 border-medium">
    <div className="border-archive-brown-400 p2">
      <Heading kind="chromesparks" className="text-uppercase" bold>
        {kind}
      </Heading>
      <ul>
        {kindList.map((item, i) => (
          <Li kind="danny" key={i}>
            {item}
          </Li>
        ))}
      </ul>
    </div>
  </div>
);

const TimeStamp = ({ time }) => (
  <div className="snack__timestamp border-top border-archive-brown-400 border-medium">
    <div className="flex items-center">
      <img src={stopwatch} className="h40px w40px relative t-2px mr1" />
      <Heading kind="bigfreedia" level={3} className="white py2 lh36px">
        {time}
      </Heading>
    </div>
  </div>
);

const NeonSnack = ({ image }) => {
  return (
    <div className="snack__neon py2 pl2 hide flex-lg">
      <div className="m-auto w100p">
        <div className="aspect-ratio aspect-ratio--1x1 clip">
          <img
            className="max-w100p h100p o-fit-contain aspect-ratio__object"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

const Clip = ({ clip, clipPosition }) => {
  return (
    <div className="snack__clip pb2 pt2 pl2 border-bottom-lg border-archive-brown-400 border-medium clip">
      <div className="aspect-ratio aspect-ratio--4x3 aspect-ratio--16x9-lg clip">
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
    <div className="aspect-ratio aspect-ratio--4x3">
      <img
        className="max-w100p o-fit-cover h100p aspect-ratio__object"
        src={image}
      />
    </div>
  </div>
);

const Title = ({ text, index }) => (
  <Heading
    kind="jonhopkins"
    className="py2 white snack__title border-bottom border-right-lg border-archive-brown-400 border-medium flex items-center"
  >
    <div className="self-stretch flex items-center bg-archive-brown-400 px2 py3 mr3">
      <span className="fz38px flex-none">#</span>
      <span className="flex-none">{index}</span>
    </div>
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
      <Title text={title} index={index} />
      <Photo image={image} />
      <TimeStamp time={timeStamp} />
      <Food kind={kind} kindList={kindList} />
      <Vessel vesselList={vesselList} />
      <Clip clip={clip} clipPosition={clipPosition} />
      <NeonSnack image={neonImage} />
    </div>
  );
};

export default Snack;
