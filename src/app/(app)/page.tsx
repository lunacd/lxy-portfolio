import HomeIntro from "./HomeIntro";
import HomeSection from "./HomeSection";
import InViewDetector from "./InViewDetector";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import React from "react";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";

export const metadata: Metadata = {
  title: "Shirley Lyu Portfolio",
};

export default async function Home() {
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
  return (
    <Scroller bgColor="#FDF9F1">
      <HomeIntro profilePicture={globalData.profilePicture} payload={payload} />
      {projects.map((project) => (
        <InViewDetector
          key={project.uri}
          detectorKey={project.uri}
          className="flex h-[90vh] w-full flex-col"
        >
          <HomeSection project={project} payload={payload} />
        </InViewDetector>
      ))}
      <ConnectPrompt payload={payload} />
    </Scroller>
  );
}
