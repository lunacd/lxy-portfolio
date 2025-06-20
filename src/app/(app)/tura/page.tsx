import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Tura | Shirley Lyu",
};

export default async function Tura() {
  const payload = await getPayload({
    config,
  });
  const turaData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "tura" },
      },
      depth: 2,
    })
  ).docs[0];
  const turaPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Tura" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={turaData.backgroundColor}>
      <TopDisplay project={turaData} payload={payload} />
      <div className="w-single">
        <Blocks blocks={turaPageData.blocks} payload={payload} />
      </div>
      <RelatedWork
        color={turaData.contentColor}
        projects={turaData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </Scroller>
  );
}
