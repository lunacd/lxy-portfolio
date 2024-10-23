import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import LandingScrollIndicator from "./LandingScrollIndicator";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default async function Home() {
  const payload = await getPayloadHMR({
    config,
  });
  const projects = (
    await payload.find({
      collection: "projects",
      pagination: false,
      where: {
        isMainProject: {
          equals: true,
        },
      },
      sort: "order",
    })
  ).docs;
  return (
    <div className="relative h-full flex-grow overflow-hidden">
      <LandingScrollIndicator>
        <AnimatePresence initial={false}>
          {projects.map((project) => (
            <InViewDetector
              key={project.uri}
              detectorKey={project.uri}
              className="flex h-[90vh] w-full flex-col"
            >
              <HomeSection project={project} payload={payload} />
            </InViewDetector>
          ))}
        </AnimatePresence>
        <ConnectPrompt />
      </LandingScrollIndicator>
    </div>
  );
}
