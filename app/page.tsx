"use client";

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useContext } from "react";

import TopDisplay from "../components/top-display";
import { projectData } from "../utils/project-data";
import { transitionSlow } from "../utils/transition";
import { StateContext } from "./stateProvider";

const MotionTopDisplay = motion(TopDisplay);

export default function Home() {
  const pathname = usePathname();
  const globalState = useContext(StateContext);
  return (
    <>
      <Head>
        <title>Shirley Lyu Portfolio</title>
      </Head>
      <motion.div
        className="absolute left-0 top-0 z-0 h-full w-full"
        initial={{ x: globalState.swipeAnimation ? "100%" : "0%" }}
        animate={{ x: "0%" }}
        exit={{ x: globalState.swipeAnimation ? "-100%" : "0%" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        key={pathname}
      >
        <div className="relative h-full flex-grow overflow-hidden">
          <AnimatePresence initial={false}>
            <MotionTopDisplay
              project={projectData[globalState.project]}
              link
              absolute={true}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transitionSlow}
              key={globalState.project}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
