import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="pointer m-auto bg-archive-beige p3 border-none rounded-medium">
      {children}
    </button>
  );
};

export default Button;
