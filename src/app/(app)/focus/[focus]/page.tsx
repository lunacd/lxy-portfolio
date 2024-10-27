import HomeSection from "../../HomeSection";
import InViewDetector from "../../InViewDetector";
import LandingScrollIndicator from "./LandingScrollIndicator";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { AnimatePresence } from "framer-motion";
import { notFound } from "next/navigation";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import { getProjectsWithFocus } from "@/utils/payloadHelpers";

const mainFocuses = ["product-design", "user-experience-design", "edtech"];

export default async function FocusPage({
  params,
}: {
  params: Promise<{ focus: string }>;
}) {
  const focus = (await params).focus;
  if (!mainFocuses.includes(focus)) {
    return notFound();
  }
  const payload = await getPayloadHMR({
    config,
  });
  const { projects } = await getProjectsWithFocus(focus, payload);

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
