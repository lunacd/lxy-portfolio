import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import Block from "src/blocks/Block";

import AnimationCoordinator from "@/components/AnimationCoordinator";
import FloatUpMotion from "@/components/FloatUpMotion";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Memory Voyage | Shirley Lyu",
};

export default async function MemoryVoyage() {
  const payload = await getPayload({
    config,
  });
  const memoryVoyageData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "memory-voyage" },
      },
    })
  ).docs[0];
  const memoryVoyagePageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Memory Voyage" },
      },
    })
  ).docs[0];

  return (
    <AnimationCoordinator frameDuration={2000}>
      <Scroller
        bgColor={
          memoryVoyageData.pageBackgroundColor ??
          memoryVoyageData.backgroundColor
        }
      >
        <TopDisplay project={memoryVoyageData} payload={payload} />
        {memoryVoyagePageData.blocks.map((block, index) => (
          <FloatUpMotion className="single" key={index}>
            <Block block={block} payload={payload} />
          </FloatUpMotion>
        ))}
      </Scroller>
    </AnimationCoordinator>
  );
}
