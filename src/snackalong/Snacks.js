import React from "react";
import { Heading } from "../components/Text";
import Grid from "../components/Grid";
import clip1 from "./assets/clip1.png";
import jelly from "./assets/jellybeans.jpg";

const Snack = ({
  title,
  index,
  timeStamp,
  kind,
  kindList,
  vesselList,
  clip,
  image
}) => {
  return (
    <div className="snack col-10">
      <Heading
        style="H100"
        className="archive-beige snack__title"
      >{`#${index} ${title}`}</Heading>
      <div className="snack__clip bg-archive-beige">
        <img src={clip} className="max-w100p" />
      </div>
      <div className="snack__timestamp">{timeStamp}</div>
      <div className="snack__kind">
        <Heading>{kind}</Heading>
        <ul>
          {kindList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="snack__vessel">
        <Heading>Vessel</Heading>
        <ul>
          {vesselList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="snack__photo">
        <img className="max-w100p" src={image} />
      </div>
    </div>
  );
};

const Snacks = () => {
  return (
    <div className="bg-archive-brown-900 py40vh">
      <Grid lines={false}>
        <Snack
          title="Cheese Nachos"
          index="1"
          timeStamp="0:05:12"
          kind="Food"
          kindList={["Shredded cheese", "Tortilla chips"]}
          vesselList={["Red paper tray"]}
          clip={clip1}
          image={jelly}
        />
      </Grid>
    </div>
  );
};

export default Snacks;
