import React from 'react';
import styles from '../utils/css';
import { Button as TextButton } from '../components/Text';

export const Button = props => {
  const { children, className, ...rest } = props;
  const sizes = {
    small: 'p3',
    medium: 'p3 fz20px'
  };

  const classNames = styles(
    className,
    'pointer text-center bg-archive-beige border-none rounded-medium',
    sizes[props.size] ? sizes[props.size] : sizes['small']
  );

  return (
    <TextButton kind="vulfpeck" className={classNames} {...rest}>
      {children}
    </TextButton>
  );
};

export const PlayButton = props => {
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
