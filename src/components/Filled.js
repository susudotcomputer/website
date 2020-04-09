import React from "react";

const Filled = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="bg-white px0 px5-sm border-left border2px border-black_05">
        {children}
      </div>
    </div>
  );
};

export default Filled;
