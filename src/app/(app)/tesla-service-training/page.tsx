import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import ConnectPrompt from "@/components/ConnectPrompt";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Skates | Shirley Lyu",
};

export default async function Skates() {
  const payload = await getPayload({
    config,
  });
  const teslaData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "tesla" },
      },
      depth: 2,
    })
  ).docs[0];
  const skatesPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Tesla" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={""}>
      <TopDisplay project={teslaData} payload={payload} />
      <div className="w-single">
        <Blocks blocks={skatesPageData.blocks} payload={payload} />
      </div>
      <RelatedWork
        color={teslaData.contentColor}
        projects={teslaData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
      <ConnectPrompt payload={payload} />
    </Scroller>
  );
}
