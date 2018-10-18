import React from "react";
import styles from "../utils/css";

const TEXT_STYLES = {
  H100: styles("fz40px font-mono"),
  H200: styles("fz32px font-mono ls-1px"),
  H300: styles("fz18px font-mono ls0px"),
  P100: styles("fz18px"),
  P200: styles("fz16px")
};

export const Text = ({ tag: Tag = "span", style, children, className }) => {
  const classes = styles(TEXT_STYLES[style], className);
  return <Tag className={classes}>{children}</Tag>;
};

export const Paragraph = props => <Text tag="p" {...props} />;
export const Div = props => <Text tag="div" {...props} />;
export const Span = props => <Text tag="span" {...props} />;
export const Li = props => <Text tag="li" {...props} />;
export const Heading = props => <Text tag={`h${props.level}`} {...props} />;
