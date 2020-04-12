import React from "react";
import styles from "../utils/css";
import { Button as TextButton } from "../components/Text";

export const Button = (props) => {
  const { children, className, ...rest } = props;
  const sizes = {
    small: styles("p3"),
    medium: styles("p3 fz20px"),
  };

  const colors = {
    beige: styles(
      "bg-archive-beige hover-bg-archive-brown-900 hover-archive-beige"
    ),
    black: styles("bg-black white hover-bg-white hover-black"),
  };

  const classNames = styles(
    className,
    "pointer text-center border-none rounded-medium",
    "hov-target",
    sizes[props.size] ? sizes[props.size] : sizes["small"],
    colors[props.color] ? colors[props.color] : colors["beige"]
  );

  return (
    <TextButton kind="vulfpeck" className={classNames} {...rest}>
      {children}
    </TextButton>
  );
};

export const PlayButton = (props) => {
  return (
    <TextButton
      kind="vulfpeck"
      bold
      className="text-uppercase text-center circle h15 w15 fz20px p2 border border-archive-beige bg-transparent archive-beige m-auto hover-border-archive-beige hover-bg-archive-beige hover-archive-brown-900"
      {...props}
    >
      Play
    </TextButton>
  );
};
