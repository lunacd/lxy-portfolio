"use client";

import { AnimationContext } from "./AnimationCoordinator";
import classNames from "classnames";
import { Children, PropsWithChildren, useContext } from "react";

interface SlideShowAnimationProps {
  className?: string;
}

export default function SlideShowAnimation(
  props: PropsWithChildren<SlideShowAnimationProps>,
) {
  const animationData = useContext(AnimationContext);
  const children = Children.toArray(props.children);
  const frame = animationData.frame % children.length;
  const count = Children.count(props.children);
  return (
    <div className={`relative ${props.className ?? ""}`}>
      {Children.map(props.children, (child, index) => (
        <div
          key={index}
          className={classNames("transition-opacity duration-700 ease-linear", {
            "opacity-100": frame % count === index,
            "opacity-0": frame % count !== index,
          })}
        >
          {child}
        </div>
      ))}
    </div>
  );
}