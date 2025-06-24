import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import AnimationCoordinator from "@/components/AnimationCoordinator";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Soul | Shirley Lyu",
};

export default async function Soul() {
  const payload = await getPayload({
    config,
  });
  const soulData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "soul" },
      },
      depth: 2,
    })
  ).docs[0];
  const soulPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Soul" },
      },
    })
  ).docs[0];
  return (
    <AnimationCoordinator frameDuration={2000}>
      <Scroller bgColor={soulData.backgroundColor}>
        <TopDisplay project={soulData} payload={payload} />
        <div className="w-single">
          <Blocks blocks={soulPageData.blocks} payload={payload} />
        </div>
        <RelatedWork
          color={soulData.contentColor}
          projects={soulData.relatedWorks.map(
            (relatedWork) => relatedWork.relatedWork,
          )}
          payload={payload}
        />
      </Scroller>
    </AnimationCoordinator>
  );
}
