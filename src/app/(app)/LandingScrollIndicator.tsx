"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { PropsWithChildren, useRef, useState } from "react";

import ScrollIndicator from "@/components/ScrollIndicator";
import Scroller from "@/components/Scroller";

export default function LandingScrollIndicator(props: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [showIndicator, setShowIndicator] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.2) {
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  });
  return (
    <>
      <Scroller bgColor="white" ref={containerRef}>
        {props.children}
      </Scroller>
      <div className="fixed bottom-4 right-8 z-10">
        {showIndicator && <ScrollIndicator light={true} />}
      </div>
    </>
  );
}
