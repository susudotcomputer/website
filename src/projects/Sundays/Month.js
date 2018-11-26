import React from 'react';

const Month = ({ month, susuDay, breakfast, week1, week3, week4 }) => {
  return (
    <>
      <h3 className="mb3 font-mono fz24px text-uppercase">{month}</h3>
      <ol className="border border-white rounded grid grid-1 grid-4-sm mb6 bg-sususunday-red">
        <li className="px3 pt3 pb4 text-center o50p">
          <h4 className="border-bottom border-white pb1 mb3 font-mono fz24px">
            Week 1
          </h4>
          <p>{week1}</p>
        </li>
        <li className="px3 pt3 pb4 text-center">
          <h4 className="border-bottom border-white pb1 mb3 font-mono fz24px">
            {`${month} ${susuDay}`}
          </h4>
          <p className="fz30px">{breakfast}</p>
        </li>
        <li className="px3 pt3 pb4 text-center o50p">
          <h4 className="border-bottom border-white pb1 mb3 font-mono fz24px">
            Week 3
          </h4>
          <p>{week3}</p>
        </li>
        <li className="px3 pt3 pb4 text-center o50p">
          <h4 className="border-bottom border-white pb1 mb3 font-mono fz24px">
            Week 4
          </h4>
          <p>{week4}</p>
        </li>
      </ol>
    </>
  );
};

export default Month;
