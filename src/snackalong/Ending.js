import React from "react";
import castImage from "../assets/oceans-cast-transparent.png";

const Ending = () => {
  return (
    <div className="relative">
      <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
        <div className="max-w1200px bg-gridient h100p mx-auto " />
      </div>
      <div className="mb-15vw"></div>
      <div className="lh0">
        <img className="w100p" src={castImage} />
      </div>
    </div>
  );
};

export default Ending;
