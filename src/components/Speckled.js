import React from "react";
import Grid from "../components/Grid";
import styles from "../utils/css";
import specklesLight from "../assets/speckled.png";
import specklesDark from "../assets/speckled-dark.png";

const Speckled = ({
  className,
  children,
  grid = false,
  backgroundColor = "beige",
}) => {
  const colors = {
    beige: styles("bg-archive-beige"),
    archiveBrown900: styles("bg-archive-brown-900"),
  };
  const backgroundImage = {
    beige: specklesLight,
    archiveBrown900: specklesDark,
  };

  const classes = styles(className, colors[backgroundColor], "bg-repeat");
  return (
    <div
      className={classes}
      style={{
        backgroundImage: `url(${backgroundImage[backgroundColor]})`,
        backgroundSize: "600px",
      }}
    >
      {grid ? <Grid lines={false}>{children}</Grid> : children}
    </div>
  );
};

export default Speckled;
