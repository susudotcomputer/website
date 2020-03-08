import React from "react";
import "./heart.scss";
import styles from "../utils/css";

export const Heart = ({ className }) => {
  const positionClasses = styles(className);
  return (
    <div className={`${positionClasses} absolute heart`}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 191 175"
        xmlSpace="preserve"
      >
        <path
          d="M190.5,56.5c0,15.1-6,28.9-15.8,39c-0.2,0.2-0.4,0.4-0.6,0.6l-78.6,78.6L16.9,96.1c-0.2-0.2-0.4-0.4-0.6-0.6
    C6.5,85.4,0.5,71.6,0.5,56.5c0-30.9,25.1-56,56-56c15.2,0,28.9,6,39,15.8h0c10.1-9.8,23.8-15.8,39-15.8
    C165.4,0.5,190.5,25.6,190.5,56.5z"
        />
      </svg>
    </div>
  );
};
