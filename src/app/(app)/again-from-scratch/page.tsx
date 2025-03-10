import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import Block from "src/blocks/Block";

import FloatUpMotion from "@/components/FloatUpMotion";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Again From Scratch | Shirley Lyu",
};

export default async function AgainFromScratch() {
  const payload = await getPayload({
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
    </Scroller>
  );
}
