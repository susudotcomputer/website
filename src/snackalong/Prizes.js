import React from 'react';
import prize1 from './assets/prizes/prize-1.jpg';
import prize2 from './assets/prizes/prize-2.jpg';
import prize3 from './assets/prizes/prize-3.jpg';

const Prizes = () => {
  return (
    <div className="flex">
      <div className="flex1 mr6">
        <img src={prize1} />
      </div>
      <div className="flex1 flex flex-column justify-between">
        <div className="aspect-ratio aspect-ratio--16x9">
          <div className="aspect-ratio__object">
            <img className="w100p h100p o-fit-cover" src={prize2} />
          </div>
        </div>
        <div className="aspect-ratio aspect-ratio--16x9">
          <div className="aspect-ratio__object">
            <img className="w100p h100p o-fit-cover" src={prize3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
