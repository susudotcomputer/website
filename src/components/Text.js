import React from "react";
import styles from "../utils/css";

const TEXT_STYLES = {
  vulfpeck: {
    classes: styles("font-mono fz18px ls-1px smooth-antialiased"),
    bold: styles("weight-600"),
    normal: styles("weight-400"),
    italic: styles("font-italic"),
  },
  chromesparks: {
    classes: styles("font-mono fz22px ls-2px smooth-antialiased"),
    bold: styles("weight-600"),
    normal: styles("weight-400"),
    italic: styles("font-italic"),
  },
  bigfreedia: {
    classes: styles(
      "font-mono fz28px ls-1px fz38px-md ls-2px-md smooth-antialiased"
    ),
    bold: styles("weight-600"),
    normal: styles("weight-400"),
    italic: styles("font-italic"),
  },
  jonhopkins: {
    classes: styles("font-mono fz30px fz60px-md ls-4px-md smooth-antialiased"),
    bold: styles("weight-600"),
    normal: styles("weight-400"),
    italic: styles("font-italic"),
  },
  kishibashi: {
    classes: styles("font-mono fz100px fz130px-md ls-6px smooth-antialiased"),
    bold: styles("weight-600"),
    normal: styles("weight-400"),
    italic: styles("font-italic"),
  },
  danny: {
    classes: styles("font-serif fz17px lh28px"),
    bold: styles("weight-600"),
    normal: styles("weight-300"),
    italic: styles("font-italic"),
  },
  reuben: {
    classes: styles("font-serif fz16px"),
    bold: styles("weight-600"),
    normal: styles("weight-300"),
    italic: styles("font-italic"),
  },
  linus: {
    classes: styles("font-serif fz12px"),
    bold: styles("weight-600"),
    normal: styles("weight-300"),
    italic: styles("font-italic"),
  },
  rusty: {
    classes: styles("font-serif fz48px fz64px-md"),
    bold: styles("weight-600"),
    normal: styles("weight-300"),
    italic: styles("font-italic"),
  },
  moon: {
    classes: styles("font-cursive fz30px lh30px ls-1px smooth-antialiased"),
    bold: styles("weight-600"),
    normal: styles("weight-400"),
    italic: styles("font-italic"),
  },
};

export const Text = ({
  tag: Tag,
  kind = "danny",
  children,
  style,
  className,
  bold = false,
  italic = false,
  ...rest
}) => {
  let kindClasses;
  if (kind) {
    kindClasses = styles(
      TEXT_STYLES[kind].classes,
      bold ? TEXT_STYLES[kind].bold : TEXT_STYLES[kind].normal,
      italic ? TEXT_STYLES[kind].italic : ""
    );
  }

  const classes = styles(className, kindClasses);
  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
};

export const Label = (props) => <Text tag="label" {...props} />;
export const Paragraph = (props) => <Text tag="p" {...props} />;
export const Strong = (props) => <Text tag="strong" bold {...props} />;
export const Em = (props) => <Text tag="em" italic {...props} />;
export const Div = (props) => <Text tag="div" {...props} />;
export const Span = (props) => <Text tag="span" {...props} />;
export const Li = (props) => <Text tag="li" {...props} />;
export const Button = (props) => {
  const linkOrButton = props.href ? "a" : "button";
  return <Text tag={linkOrButton} {...props} />;
};
export const Heading = (props) => {
  const level = props.level ? props.level : "2";
  return <Text tag={`h${level}`} {...props} />;
};

export const TextLink = (props) => {
  const { color, href, className, ...rest } = props;
  const linkColor = {
    black: styles("black hover-archive-brown-400"),
    beige: styles("archive-beige hover-archive-brown-400"),
  };
  const classes = styles(
    "text-underline",
    color ? linkColor[color] : linkColor["black"],
    className
  );
  return <Text tag="a" href={href} className={classes} {...rest} />;
};

export const Ul = (props) => {
  const { className, ...rest } = props;
  const classes = styles(className, "list-circle");
  return <ul className={classes} {...rest} />;
};
