import React from 'react';
import styles from '../utils/css';

const Button = props => {
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

export default Button;
