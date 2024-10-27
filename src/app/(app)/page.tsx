import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import LandingScrollIndicator from "./LandingScrollIndicator";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import PageScaffold from "@/components/PageScaffold";

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
    <PageScaffold>
      <LandingScrollIndicator>
        {projects.map((project) => (
          <InViewDetector
            key={project.uri}
            detectorKey={project.uri}
            className="flex h-[90vh] w-full flex-col"
          >
            <HomeSection project={project} payload={payload} />
          </InViewDetector>
        ))}
        <ConnectPrompt />
      </LandingScrollIndicator>
    </PageScaffold>
  );
}
