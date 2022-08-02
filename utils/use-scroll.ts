import { useEffect, useRef, useState } from "react";

const useScroll = (scroll: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (scroll) {
      if (ref.current && firstTime) {
        setFirstTime(false);
        ref.current.scrollBy({
          top: 300,
          behavior: "smooth",
        });
      }
    }
  }, [scroll, ref, firstTime]);

  return ref;
};

export default useScroll;
