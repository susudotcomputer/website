import React, { useState } from 'react';
import { useInterval } from '../utils/hooks/useInterval';
import styles from '../utils/css';
import leftArrow from './assets/left-arrow.svg';
import rightArrow from './assets/right-arrow.svg';
import SVG from 'react-inlinesvg';

const baseTheme = {
  dotStyles: {
    base: styles(
      'pointer p0 h6px min-w6 max-w10 border border-archive-brown-400 border'
    ),
    active: styles('bg-archive-brown-400'),
    inactive: styles('')
  },
  arrowStyles: {
    base: styles('border-none bg-white fill-archive-brown-400'),
    active: styles('o100p'),
    inactive: styles('o25p')
  },
  arrowLeft: () => <SVG className="w4 block" src={leftArrow} />,
  arrowRight: () => <SVG className="w4 block" src={rightArrow} />
};

const NavButton = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const Carousel = (theme = baseTheme) => ({
  autoAdvanceInterval,
  showDots = true,
  showArrows = true,
  aspectRatio,
  children
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const ArrowLeft = theme.arrowLeft;
  const ArrowRight = theme.arrowRight;

  const previousImage = () => {
    activeImage > 0
      ? setActiveImage(activeImage - 1)
      : setActiveImage(children.length - 1);
  };

  const nextImage = () => {
    activeImage === children.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  if (autoAdvanceInterval) {
    useInterval(nextImage, autoAdvanceInterval);
  }

  const imageContainerStyles = styles(
    aspectRatio ? `aspect-ratio ${aspectRatio}` : '',
    'bg-black'
  );

  return (
    <div>
      <div className="flex">
        {showArrows && (
          <NavButton className={theme.arrowStyles.base} onClick={previousImage}>
            <ArrowLeft />
          </NavButton>
        )}

        <div className="w100p">
          <div className={imageContainerStyles}>
            {children.map((child, i) => {
              if (activeImage === i) {
                const baseChildClasses = styles(
                  'o-fit-cover w100p h100p',
                  child.props.className
                );
                return (
                  <div
                    key={`carousel-image-${i}`}
                    className={aspectRatio ? 'aspect-ratio__object' : ''}
                  >
                    {React.cloneElement(child, {
                      ...child.props,
                      className: baseChildClasses
                    })}
                  </div>
                );
              }
            })}
          </div>
        </div>
        {showArrows && (
          <NavButton className={theme.arrowStyles.base} onClick={nextImage}>
            <ArrowRight />
          </NavButton>
        )}
      </div>
      {showDots && (
        <div className="flex justify-around w50p mx-auto mt3">
          {children.map((_, i) => {
            const isActive = activeImage === i;
            const dotClasses = styles(
              theme.dotStyles.base,
              isActive ? theme.dotStyles.active : theme.dotStyles.inactive
            );
            return (
              <button
                key={`dots-${i}`}
                className={dotClasses}
                onClick={() => setActiveImage(i)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel();
