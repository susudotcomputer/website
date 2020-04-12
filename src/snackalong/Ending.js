import React from "react";
import Grid from "../components/Grid";
import castImage from "../assets/oceans-cast-transparent.png";
import Note from "./Note";
import Speckled from "../components/Speckled";

const Ending = () => {
  return (
    <div className="relative">
      <div className="absolute w100p t0 r0 b0 l0 z-1 px5">
        <div className="max-w1200px bg-gridient h100p mx-auto " />
      </div>
      <div>
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
  );
};

export default Ending;
