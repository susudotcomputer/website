import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const AutoplayVideo = props => {
  let videoEl = React.createRef();

  const visibilityChange = isVisible => {
    isVisible ? videoEl.current.play() : videoEl.current.pause();
  };

  return (
    <VisibilitySensor onChange={visibilityChange}>
      <video loop muted ref={videoEl} {...props} />
    </VisibilitySensor>
  );
};

export default AutoplayVideo;
