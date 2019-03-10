import React from 'react';
import styles from '../utils/css';

const TEXT_STYLES = {
  vulfpeck: {
    classes: styles('font-mono fz18px ls-1px'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  chromesparks: {
    classes: styles('font-mono fz28px ls-3px'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  bigfreedia: {
    classes: styles('font-mono fz38px ls-2px'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  jonhopkins: {
    classes: styles('font-mono fz60px ls-2px'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  kishibashi: {
    classes: styles('font-mono fz156px'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  danny: {
    classes: styles('font-serif fz20px'),
    bold: styles('weight-600'),
    normal: styles('weight-300')
  },
  reuben: {
    classes: styles('font-serif fz16px'),
    bold: styles('weight-600'),
    normal: styles('weight-300')
  },
  linus: {
    classes: styles('font-serif fz12px'),
    bold: styles('weight-600'),
    normal: styles('weight-300')
  },
  moon: {
    classes: styles('font-cursive fz30px lh30px'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  }
};

export const Text = ({
  tag: Tag = 'span',
  kind = 'vulfpeck',
  children,
  style,
  className,
  bold = false
}) => {
  const classes = styles(
    TEXT_STYLES[kind].classes,
    bold ? TEXT_STYLES[kind].bold : TEXT_STYLES[kind].normal,
    className
  );
  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  );
};

export const Paragraph = props => <Text tag="p" {...props} />;
export const Div = props => <Text tag="div" {...props} />;
export const Span = props => <Text tag="span" {...props} />;
export const Li = props => <Text tag="li" {...props} />;
export const Heading = props => {
  const level = props.level ? props.level : '2';
  return <Text tag={`h${level}`} {...props} />;
};
