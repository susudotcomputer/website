import React from "react";
import Grid from "../components/Grid";
import styles from "../utils/css";
import speckles from "../assets/speckled.png";

const Speckled = ({
  className,
  children,
  grid = false,
  backgroundColor = "beige",
}) => {
  const colors = {
    beige: styles("bg-archive-beige"),
    archiveBrown400: styles("bg-archive-brown-400"),
    archiveBrown900: styles("bg-archive-brown-900"),
  };

  const classes = styles(className, colors[backgroundColor], "bg-repeat");
  return (
    <div
      className={classes}
      style={{ backgroundImage: `url(${speckles})`, backgroundSize: "600px" }}
    >
      {grid ? <Grid lines={false}>{children}</Grid> : children}
    </div>
  );
};

export default Speckled;
