/** @format */

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  intersectionOptions,
  hookOptions = { recordIntersectionRatio: false }
) => {
  const targetRef = useRef(null);
  const [intersectionValues, setIntersectionValues] = useState({
    isIntersecting: false,
    didIntersect: false
  });
  const [intersectionRatio, setIntersectionRatio] = useState();
  const { isIntersecting, didIntersect } = intersectionValues;
  const { recordIntersectionRatio } = hookOptions;

  useEffect(() => {
    // We use the IntersectionObserver API to determine element visibility.
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    const observer = new IntersectionObserver(([entry]) => {
      if (recordIntersectionRatio) {
        setIntersectionRatio(entry.intersectionRatio);
      }
      if (entry.isIntersecting !== isIntersecting) {
        setIntersectionValues({
          isIntersecting: entry.isIntersecting,
          didIntersect: true
        });
      }
    }, intersectionOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef.current, isIntersecting, didIntersect, intersectionRatio]);
  return { targetRef, isIntersecting, didIntersect, intersectionRatio };
};
