import { useGlobalStateContext } from "./globalStateContext";
import { useEffect, useRef, useState } from "react";

export default function useScroll() {
  const { globalState } = useGlobalStateContext();
  const { swipeAnimation } = globalState;
  const ref = useRef<HTMLDivElement>(null);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!swipeAnimation) {
      if (ref.current && firstTime) {
        setFirstTime(false);
        ref.current.scrollBy({
          top: 300,
          behavior: "smooth",
        });
      }
    }
  }, [swipeAnimation, ref, firstTime]);

  return ref;
}
