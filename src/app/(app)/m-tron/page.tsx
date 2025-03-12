import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import Block from "src/blocks/Block";

import AnimationCoordinator from "@/components/AnimationCoordinator";
import FloatUpMotion from "@/components/FloatUpMotion";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "M-Tron | Shirley Lyu",
};

export default async function MTron() {
  const payload = await getPayload({
    config,
  });
  const mTronData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "m-tron" },
      },
      depth: 2,
    })
  ).docs[0];
  const mTronPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "M-Tron" },
      },
    })
  ).docs[0];

  return (
    <AnimationCoordinator frameDuration={2000}>
      <Scroller
        bgColor={mTronData.pageBackgroundColor ?? mTronData.backgroundColor}
      >
        <TopDisplay project={mTronData} payload={payload} />
        {mTronPageData.blocks.map((block, index) => (
          <FloatUpMotion className="single" key={index}>
            <Block block={block} payload={payload} />
          </FloatUpMotion>
        ))}
      </Scroller>
      <RelatedWork
        projects={mTronData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </AnimationCoordinator>
  );
}
