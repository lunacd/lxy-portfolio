import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import FloatUpMotion from "@/components/FloatUpMotion";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import Block from "@/sections/Block";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Again From Scratch | Shirley Lyu",
};

export default async function AgainFromScratch() {
  const payload = await getPayloadHMR({
    config,
  });
  const againFromScratchProjectData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "again-from-scratch" },
      },
    })
  ).docs[0];
  const againFromScratchPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Again from Scratch" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={againFromScratchProjectData.backgroundColor}>
      <TopDisplay project={againFromScratchProjectData} payload={payload} />
      {againFromScratchPageData.blocks.map((block, index) => (
        <FloatUpMotion className="single" key={index}>
          <Block block={block} payload={payload} />
        </FloatUpMotion>
      ))}
      <ProjectNavigation prev="/overlap" next="/sunrise" />
    </Scroller>
  );
}
