import React from 'react';
import styles from '../utils/css';

export const Button = props => {
  const { children, className, ...rest } = props;
  const sizes = {
    small: 'p3',
    medium: 'p3 fz20px'
  };

  const classNames = styles(
    className,
    'pointer m-auto bg-archive-beige border-none rounded-medium',
    sizes[props.size] ? sizes[props.size] : sizes['small']
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export const PlayButton = props => {
  return (
    <button
      className="text-center circle h15 w15 fz20px p2 border border-white bg-transparent white m-auto"
      {...props}
    >
      Play
    </button>
  );
};
