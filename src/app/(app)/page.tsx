import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import { getProject } from "@/utils/payloadHelpers";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default async function Home() {
  const payload = await getPayloadHMR({
    config,
  });
  const projects = await Promise.all(
    (
      await payload.findGlobal({
        slug: "projectOrder",
        depth: 1,
      })
    ).projects.map(
      async (rawProject) => await getProject(rawProject.project, payload),
    ),
  );
  return (
    <div className="relative h-full flex-grow overflow-hidden">
      <Scroller bgColor="bg-white">
        <AnimatePresence initial={false}>
          {projects.map((project) => (
            <InViewDetector
              key={project.uri}
              detectorKey={project.uri}
              className="flex h-full min-h-screen w-full flex-col"
            >
              <HomeSection project={project} payload={payload} />
            </InViewDetector>
          ))}
        </AnimatePresence>
        <ConnectPrompt />
      </Scroller>
    </div>
  );
}
