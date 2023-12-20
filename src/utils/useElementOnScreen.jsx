import { useEffect, useRef, useState } from "react";

export function useElementOnScreen() {

    const containerRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);

    const callbackFn = (entires) => {
      const [ entry ] = entires;
      setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const options = { threshold: 0.5 };
      const current = containerRef.current;

      const observer = new IntersectionObserver(callbackFn, options);
      if (current) {
        observer.observe(current);
      }

      return () => {
        if (current) {
          observer.unobserve(current);
        }
      }
    }, [ containerRef ]);

    return [ containerRef, isVisible ];
}
