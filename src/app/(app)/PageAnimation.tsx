"use client";

import FrozenRouter from "./FrozenRouter";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default function PageAnimation(props: PropsWithChildren) {
  const pathname = usePathname();
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="absolute top-0 left-0 z-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        key={pathname}
        layoutId={pathname}
      >
        <FrozenRouter>{props.children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
