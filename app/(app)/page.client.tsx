"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useInterval } from "usehooks-ts";

import TopDisplay from "@/components/TopDisplay";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { projects, projectsData } from "@/utils/projectData";
import { transitionSlow } from "@/utils/transitions";

const MotionTopDisplay = motion(TopDisplay);

export default function HomeClient() {
  const { globalState, dispatch } = useGlobalStateContext();
  const { projectRolling } = globalState;
  useInterval(
    () => {
      dispatch({ type: "nextProject" });
    },
    projectRolling ? 3000 : null,
  );

  // Start rolling on page load
  useEffect(() => {
    dispatch({ type: "setProjectRoll", rolling: true });
    dispatch({ type: "setDisplayAnimation", displayAnimation: true });
  }, [dispatch]);

  return (
    <AnimatePresence initial={false}>
      <MotionTopDisplay
        project={projectsData[projects[globalState.currentProjectIndex]]}
        link
        animation={globalState.displayAnimation}
        absolute={true}
        initial={{ opacity: globalState.displayAnimation ? 0 : 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: globalState.displayAnimation ? 0 : 1 }}
        transition={transitionSlow}
        key={globalState.currentProjectIndex}
      />
    </AnimatePresence>
  );
}
