"use client";

import FrozenRouter from "./FrozenRouter";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default function PageAnimation(props: PropsWithChildren) {
  const pathname = usePathname();
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="absolute left-0 top-0 z-0 h-full w-full"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        key={pathname}
        layoutId={pathname}
      >
        <FrozenRouter>{props.children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
