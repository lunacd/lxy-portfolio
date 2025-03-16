import HomeIntro from "./HomeIntro";
import HomeProjects from "./HomeProjects";
import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import React, { Suspense } from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default async function Landing() {
  const payload = await getPayload({
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
  const globalData = await payload.findGlobal({
    slug: "global",
  });

  const homeSections = projects.map((project) => (
    <InViewDetector
      key={project.uri}
      detectorKey={project.uri}
      className="flex h-[90vh] w-full scroll-mt-40 flex-col"
      id={project.uri}
    >
      <HomeSection project={project} payload={payload} />
    </InViewDetector>
  ));
  return (
    <Scroller bgColor="#FDF9F1">
      <HomeIntro profilePicture={globalData.profilePicture} payload={payload} />
      <Suspense>
        <HomeProjects projects={projects} homeSections={homeSections} />
      </Suspense>
      <ConnectPrompt payload={payload} />
    </Scroller>
  );
}
