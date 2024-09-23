"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { projectsData } from "@/utils/projectData";

export default function HomeClient() {
  const { dispatch } = useGlobalStateContext();

  // Start rolling on page load
  useEffect(() => {
    dispatch({ type: "setDisplayAnimation", displayAnimation: true });
  }, [dispatch]);

  return (
    <Scroller bgColor="bg-white">
      <AnimatePresence initial={false}>
        {Object.values(projectsData).map((project) => {
          return (
            <TopDisplay
              project={project}
              link
              key={project.uri}
              bottomSpacing={false}
            />
          );
        })}
      </AnimatePresence>
      <ConnectPrompt />
    </Scroller>
  );
}
