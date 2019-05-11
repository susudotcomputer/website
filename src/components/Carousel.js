import React, { useState } from 'react';
import { useInterval } from '../utils/hooks/useInterval';
import styles from '../utils/css';
import leftArrow from './assets/left-arrow.svg';
import rightArrow from './assets/right-arrow.svg';
import SVG from 'react-inlinesvg';

const baseTheme = {
  dotWrapperStyles: styles('column-gap15px column-gap40px-md w60p mx-auto mt6'),
  dotStyles: {
    base: styles(
      'pointer p0 h9px min-w6 flex1 border border1px border-archive-brown-400'
    ),
    active: styles('bg-archive-brown-400'),
    inactive: styles('bg-white')
  },
  arrowStyles: {
    base: styles('border-none fill-archive-brown-400 pointer'),
    active: styles('o100p'),
    inactive: styles('o25p')
  },
  arrowLeft: () => (
    <SVG
      className="w3 w7-sm mr4 block fill-archive-beige hover-fill-archive-brown-400"
      src={leftArrow}
    />
  ),
  arrowRight: () => (
    <SVG
      className="w3 w7-sm ml4 block fill-archive-beige hover-fill-archive-brown-400"
      src={rightArrow}
    />
  ),
  bgColor: 'bg-black'
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
  childClassNames,
  wrapperClassNames,
  overlayComponent,
  children
}) => {
  const OverlayComponent = overlayComponent;
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
    'clip',
    aspectRatio ? `aspect-ratio ${aspectRatio}` : '',
    theme.bgColor
  );

  const wrapperStyles = styles('relative', wrapperClassNames);
  return (
    <div className={wrapperStyles}>
      {overlayComponent && <OverlayComponent />}

      <div className="flex relative z0 items-center">
        {showArrows && (
          <NavButton className={theme.arrowStyles.base} onClick={previousImage}>
            <ArrowLeft />
          </NavButton>
        )}

        <div className="w100p">
          <div className={imageContainerStyles}>
            {children.map((child, i) => {
              const baseChildClasses = styles(
                childClassNames,
                child.props.className
              );
              return (
                <div
                  key={`carousel-image-${i}`}
                  className={styles(
                    'transition-all transition-ease-in-out transition300',
                    activeImage === i ? 'o100p' : 'o0p',
                    aspectRatio ? 'aspect-ratio__object' : 'l0 t0 absolute'
                  )}
                >
                  {React.cloneElement(child, {
                    ...child.props,
                    className: baseChildClasses
                  })}
                </div>
              );
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
        <div
          className={theme.dotWrapperStyles}
          style={{
            display: 'grid',
            gridAutoFlow: 'column'
          }}
        >
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
