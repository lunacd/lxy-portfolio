"use client";

import { createContext } from "react";
import { PropsWithChildren } from "react";

import useFrameIndex from "@/utils/useFrameIndex";

export const AnimationContext = createContext<{ frame: number }>({ frame: 0 });

interface AnimationCoordinatorProps {
  frameDuration: number;
}

export default function AnimationCoordinator(
  props: PropsWithChildren<AnimationCoordinatorProps>,
) {
  const currentIndex = useFrameIndex(props.frameDuration);
  return (
    <AnimationContext.Provider value={{ frame: currentIndex }}>
      {props.children}
    </AnimationContext.Provider>
  );
}
