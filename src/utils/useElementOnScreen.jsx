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

      const observer = new IntersectionObserver(callbackFn, options);
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      }
    }, [ containerRef ]);

    return [ containerRef, isVisible ];
}
