import React from "react";
import styles from "../utils/css";

const GridLines = ({ children, className }) => {
  const classes = styles("max-w1400px mx-auto bg-gridient", className);
  return (
    <div className="px5">
      <div className={classes}>{children}</div>
    </div>
  );
};

export default GridLines;
