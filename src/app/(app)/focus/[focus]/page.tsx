import HomeSection from "../../HomeSection";
import InViewDetector from "../../InViewDetector";
import LandingScrollIndicator from "./LandingScrollIndicator";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { AnimatePresence } from "framer-motion";
import { notFound } from "next/navigation";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import PageScaffold from "@/components/PageScaffold";
import { getProjectsWithFocus } from "@/utils/payloadHelpers";
import { mainFocuses } from "@/utils/projectData";

export default async function FocusPage({
  params,
}: {
  params: Promise<{ focus: string }>;
}) {
  const focus = (await params).focus;
  if (!(focus in mainFocuses)) {
    return notFound();
  }
  const payload = await getPayloadHMR({
    config,
  });
  const projects = await getProjectsWithFocus(focus, payload);

  return (
    <PageScaffold focus={focus}>
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
    </PageScaffold>
  );
}
