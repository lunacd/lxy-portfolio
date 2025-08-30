"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef, useState } from "react";

import ScrollIndicator from "@/components/ScrollIndicator";
import Scroller from "@/components/Scroller";

export default function ConditionalScrollIndicator(
  props: React.PropsWithChildren,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [showIndicator, setShowIndicator] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.4) {
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  });
  return (
    <>
      <Scroller bgColor="bg-[#FDF9F1]" ref={containerRef}>
        {props.children}
      </Scroller>
      <div className="fixed right-8 bottom-4 z-10">
        {showIndicator && <ScrollIndicator light={true} />}
      </div>
    </>
  );
}
