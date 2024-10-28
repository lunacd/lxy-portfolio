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
import { mainFocuses } from "@/utils/projectData";

interface FocusPageProps {
  params: Promise<{ focus: string }>;
}

export async function generateMetadata({ params }: FocusPageProps) {
  const focus = (await params).focus;
  return {
    title: `${mainFocuses[focus].name} Projects | Shirley Lyu`,
  };
}

export default async function FocusPage({ params }: FocusPageProps) {
  const focus = (await params).focus;
  if (!(focus in mainFocuses)) {
    return notFound();
  }
  const payload = await getPayloadHMR({
    config,
  });
  const projects = await getProjectsWithFocus(focus, payload);

  return (
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
  );
}
