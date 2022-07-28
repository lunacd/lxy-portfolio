import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const useAutoscroll = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { autoscroll } = router.query;
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (autoscroll && autoscroll === "true") {
      if (ref.current && firstTime) {
        setFirstTime(false);
        ref.current.scrollBy({
          top: 300,
          behavior: "smooth",
        });
      }
    }
  }, [autoscroll, ref, firstTime]);

  return ref;
};

export default useAutoscroll;
