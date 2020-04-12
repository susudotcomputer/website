import React from "react";
import { Paragraph } from "../components/Text";
import arrow from "./assets/arrow.svg";
import styles from "../utils/css";

const Note = ({ children, direction = "rightBelow", className }) => {
  const directions = {
    rightBelow: {
      parent: styles("justify-end"),
      arrowDirection: "scaleY(-1) scaleX(-1)",
      arrowCentering: styles("l-40px"),
      arrowPosition: styles("flex-column"),
      textRotation: "rotate(5deg)",
    },
    leftBelow: {
      arrowDirection: "scaleY(-1) scaleX(1) rotate(40deg)",
      arrowCentering: styles("r-40px t-30px"),
      arrowPosition: styles("flex-column"),
      textRotation: "rotate(-5deg)",
    },
    rightAbove: {
      parent: styles("justify-end"),
      arrowDirection: "scaleX(-1)",
      arrowCentering: styles("l-40px"),
      arrowPosition: styles("flex-column-reverse"),
      textRotation: "rotate(-5deg)",
    },
    leftAbove: {
      arrowCentering: styles("r-30px"),
      arrowPosition: styles("flex-column-reverse"),
      textRotation: "rotate(-5deg)",
    },
    centerAbove: {
      arrowCentering: styles("self-center t-10px"),
      arrowPosition: styles("flex-column-reverse"),
      textRotation: "rotate(-5deg)",
    },
    centerAboveFlip: {
      arrowCentering: styles("self-center t-10px l-40px"),
      arrowPosition: styles("flex-column-reverse"),
      textRotation: "rotate(-5deg)",
      arrowDirection: "scaleX(-1)",
    },
    leftUp: {
      arrowDirection: "scaleY(-1) scaleX(-1) rotate(65deg)",
      arrowCentering: styles("l-20px t-3px"),
      arrowPosition: styles("flex-row-reverse items-end"),
    },
    leftUpUp: {
      arrowDirection: "scaleY(-1) scaleX(-1) rotate(110deg)",
      arrowCentering: styles("t-80px"),
      arrowPosition: styles("flex-row-reverse items-end"),
    },
  };

  const {
    parent = "",
    arrowDirection = "",
    arrowCentering = "",
    arrowPosition = "",
    textRotation = "",
    textDirection = "",
  } = directions[direction];

  return (
    <div className={styles("hide flex-md", parent, className)}>
      <div className={styles("relative flex", arrowPosition)}>
        <Paragraph
          kind="moon"
          className={styles(
            "archive-yellow relative inline-block mb2",
            textDirection
          )}
          style={{ transform: textRotation }}
        >
          {children}
        </Paragraph>
        <img
          src={arrow}
          alt="hand drawn arrow"
          className={styles("w80px relative flex-none", arrowCentering)}
          style={{ transform: arrowDirection }}
        />
      </div>
    </div>
  );
};

export default Note;
