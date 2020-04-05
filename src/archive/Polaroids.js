import React from "react";

import kilian from "./assets/polaroids/01-Kilian.png";
import nathan from "./assets/polaroids/02-Nathan.png";
import julia from "./assets/polaroids/03-Julia.png";
import keith from "./assets/polaroids/04-Keith.png";
import eli from "./assets/polaroids/05-Eli.png";
import paolo from "./assets/polaroids/06-Paolo.png";
import james from "./assets/polaroids/07-James.png";
import finn from "./assets/polaroids/08-Finn.png";
import jackie from "./assets/polaroids/09-Jackie.png";
import danny from "./assets/polaroids/10-Danny.png";
import ashleigh from "./assets/polaroids/11-Ashleigh.png";
import chelsea from "./assets/polaroids/12-Chelsea.png";
import lexi from "./assets/polaroids/13-Lexi.png";
import robbie from "./assets/polaroids/14-Robbie.png";
import christopher from "./assets/polaroids/15-Christopher.png";
import sam from "./assets/polaroids/16-Sam.png";
import natasha from "./assets/polaroids/17-Natasha.png";
import chris from "./assets/polaroids/18-Chris.png";
import liz from "./assets/polaroids/19-Liz.png";

const allPolaroids = [
  kilian,
  nathan,
  julia,
  keith,
  eli,
  paolo,
  james,
  finn,
  jackie,
  danny,
  ashleigh,
  chelsea,
  lexi,
  robbie,
  christopher,
  sam,
  natasha,
  chris,
  liz,
];

export const Polaroids = () => {
  return (
    <div className="polaroid-grid">
      {allPolaroids.map((polaroid, i) => (
        <img key={`polaroid-${i}`} src={polaroid} />
      ))}
    </div>
  );
};
