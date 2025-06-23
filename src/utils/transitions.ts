import type { Transition } from "motion/react";

export const transitionFast: Transition = {
  type: "tween",
  duration: 0.2,
};

export const transitionSlow: Transition = {
  type: "tween",
  duration: 0.5,
};
