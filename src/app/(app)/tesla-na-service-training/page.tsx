import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import ConnectPrompt from "@/components/ConnectPrompt";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Tesla NA Service Training | Shirley Lyu",
};

export default async function TeslaServiceTraining() {
  const payload = await getPayload({
    config,
  });
  const teslaData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "tesla-na-service-training" },
      },
      depth: 2,
    })
  ).docs[0];
  const teslaPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Tesla NA Service Training" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={teslaData.backgroundColor}>
      <TopDisplay project={teslaData} payload={payload} />
      <div className="w-single">
        <Blocks blocks={teslaPageData.blocks} payload={payload} />
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
