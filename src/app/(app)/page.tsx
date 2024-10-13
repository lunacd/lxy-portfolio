import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import { AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default function Home() {
  return (
    <div className="relative h-full flex-grow overflow-hidden">
      <Scroller bgColor="bg-white">
        <AnimatePresence initial={false}>
          {Object.values(projectsData).map((project) => {
            return (
              <InViewDetector
                key={project.uri}
                detectorKey={project.uri}
                className="flex h-full min-h-screen w-full flex-col"
              >
                <HomeSection project={project} />
              </InViewDetector>
            );
          })}
        </AnimatePresence>
        <ConnectPrompt />
      </Scroller>
    </div>
  );
}
