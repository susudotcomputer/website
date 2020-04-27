import React from "react";
import styles from "../utils/css";

const Grid = ({ children, className, lines = true }) => {
  const classes = styles(
    "max-w1200px mx-auto archive-grid",
    className,
    lines ? "bg-gridient" : ""
  );
  return (
    <div className="px3 px5-sm">
      <div className={classes}>{children}</div>
    </div>
  );
};

export default Grid;
