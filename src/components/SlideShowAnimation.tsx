"use client";

import { AnimationContext } from "./AnimationCoordinator";
import classNames from "classnames";
import { CSSProperties, Children, PropsWithChildren, useContext } from "react";

interface SlideShowAnimationProps {
  className?: string;
  style?: CSSProperties;
}

export default function SlideShowAnimation(
  props: PropsWithChildren<SlideShowAnimationProps>,
) {
  const animationData = useContext(AnimationContext);
  const children = Children.toArray(props.children);
  const frame = animationData.frame % children.length;
  const count = Children.count(props.children);
  return (
    <div className={`relative ${props.className ?? ""}`} style={props.style}>
      {Children.map(props.children, (child, index) => (
        <div
          key={index}
          className={classNames(
            "h-full w-full transition-opacity duration-700 ease-linear",
            {
              "opacity-100": frame % count === index,
              "opacity-0": frame % count !== index,
            },
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
