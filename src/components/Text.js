import React from 'react';
import styles from '../utils/css';

const TEXT_STYLES = {
  vulfpeck: {
    classes: styles('font-mono fz18px ls-1px smooth-antialiased'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  chromesparks: {
    classes: styles('font-mono fz24px ls-2px smooth-antialiased'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  bigfreedia: {
    classes: styles(
      'font-mono fz28px ls-1px fz38px-md ls-2px-md smooth-antialiased'
    ),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  jonhopkins: {
    classes: styles('font-mono fz30px fz60px-md ls-4px-md smooth-antialiased'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  kishibashi: {
    classes: styles('font-mono fz130px ls-6px smooth-antialiased'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  },
  danny: {
    classes: styles('font-serif fz17px lh28px'),
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
  rusty: {
    classes: styles('font-serif fz48px'),
    bold: styles('weight-600'),
    normal: styles('weight-300')
  },
  moon: {
    classes: styles('font-cursive fz30px lh30px ls-1px smooth-antialiased'),
    bold: styles('weight-600'),
    normal: styles('weight-400')
  }
};

export const Text = ({
  tag: Tag,
  kind,
  children,
  style,
  className,
  bold = false,
  ...rest
}) => {
  let kindClasses;
  if (kind) {
    kindClasses = styles(
      TEXT_STYLES[kind].classes,
      bold ? TEXT_STYLES[kind].bold : TEXT_STYLES[kind].normal
    );
  }

  const classes = styles(className, kindClasses);
  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
};

export const Paragraph = props => <Text tag="p" {...props} />;
export const Strong = props => <Text tag="strong" bold {...props} />;
export const Div = props => <Text tag="div" {...props} />;
export const Span = props => <Text tag="span" {...props} />;
export const Li = props => <Text tag="li" {...props} />;
export const Heading = props => {
  const level = props.level ? props.level : '2';
  return <Text tag={`h${level}`} {...props} />;
};

export const Link = props => {
  const classes = styles(
    props.color ? props.color : 'black',
    props.className,
    'hover-archive-brown-400'
  );
  return <Text tag="a" href={props.href} className={classes} {...props} />;
};
