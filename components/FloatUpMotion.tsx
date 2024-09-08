"use client";

import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

import { transitionSlow } from "@/utils/transitions";

export default function FloatUpMotion(props: PropsWithChildren<{}>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      {props.children}
    </motion.div>
  );
}
