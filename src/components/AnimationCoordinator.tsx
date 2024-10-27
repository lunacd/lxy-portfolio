"use client";

import { createContext } from "react";
import { PropsWithChildren } from "react";

import useFrameIndex from "@/utils/useFrameIndex";

export const AnimationContext = createContext<{ frame: number }>({ frame: 0 });

export default function AnimationCoordinator(props: PropsWithChildren) {
  const currentIndex = useFrameIndex(1500);
  return (
    <AnimationContext.Provider value={{ frame: currentIndex }}>
      {props.children}
    </AnimationContext.Provider>
  );
}
