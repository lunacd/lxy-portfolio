"use client";

import { motion, useInView } from "motion/react";
import { PropsWithChildren, useRef } from "react";

import { transitionSlow } from "@/utils/transitions";

interface FloatUpMotionProps {
  className?: string;
}

export default function FloatUpMotion(
  props: PropsWithChildren<FloatUpMotionProps>,
) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
}
