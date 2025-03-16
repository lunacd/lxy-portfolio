import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Block from "@/blocks/Block";
import AnimationCoordinator from "@/components/AnimationCoordinator";
import ConnectPrompt from "@/components/ConnectPrompt";
import FloatUpMotion from "@/components/FloatUpMotion";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Lyu | Shirley Lyu",
};

export default async function Lyu() {
  const payload = await getPayload({
    config,
  });
  const lyuData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "lyu" },
      },
      depth: 2,
    })
  ).docs[0];
  const lyuPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Lyu" },
      },
    })
  ).docs[0];
  return (
    <AnimationCoordinator frameDuration={2000}>
      <Scroller bgColor={lyuData.backgroundColor}>
        <TopDisplay project={lyuData} payload={payload} />
        {lyuPageData.blocks.map((block, index) => (
          <FloatUpMotion className="single" key={index}>
            <Block block={block} payload={payload} />
          </FloatUpMotion>
        ))}
        <RelatedWork
          color={lyuData.contentColor}
          projects={lyuData.relatedWorks.map(
            (relatedWork) => relatedWork.relatedWork,
          )}
          payload={payload}
        />
        <ConnectPrompt payload={payload} />
      </Scroller>
    </AnimationCoordinator>
  );
}
