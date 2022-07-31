import { useState } from "react";
import { useInterval } from "usehooks-ts";

const useFrameIndex = (interval: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useInterval(() => {
    setCurrentIndex((orig) => orig + 1);
  }, interval);
  return currentIndex;
};

export default useFrameIndex;
