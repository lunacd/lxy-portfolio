import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import AnimationCoordinator from "@/components/AnimationCoordinator";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Overlap | Shirley Lyu",
};

export default async function Overlap() {
  const payload = await getPayload({
    config,
  });
  const overlapData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "overlap" },
      },
      depth: 2,
    })
  ).docs[0];
  const overlapPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Overlap" },
      },
    })
  ).docs[0];
  return (
    <AnimationCoordinator frameDuration={2000}>
      <Scroller bgColor={overlapData.backgroundColor}>
        <TopDisplay project={overlapData} payload={payload} />
        <div className="w-single">
          <Blocks blocks={overlapPageData.blocks} payload={payload} />
        </div>
      </Scroller>
      <RelatedWork
        color={overlapData.contentColor}
        projects={overlapData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </AnimationCoordinator>
  );
}
