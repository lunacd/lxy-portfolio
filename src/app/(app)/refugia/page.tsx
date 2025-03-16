import RefugiaClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import ConnectPrompt from "@/components/ConnectPrompt";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Refugia | Shirley Lyu",
};

export default async function Refugia() {
  const payload = await getPayload({
    config,
  });
  const refugiaData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "refugia" },
      },
      depth: 2,
    })
  ).docs[0];
  const refugiaPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Refugia" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={refugiaData.backgroundColor}>
      <RefugiaClient
        topChildren={<TopDisplay project={refugiaData} payload={payload} />}
      >
        <div className="w-single">
          <Blocks blocks={refugiaPageData.blocks} payload={payload} />
        </div>
        <RelatedWork
          color={refugiaData.contentColor}
          projects={refugiaData.relatedWorks.map(
            (relatedWork) => relatedWork.relatedWork,
          )}
          payload={payload}
        />
        <ConnectPrompt payload={payload} />
      </RefugiaClient>
    </Scroller>
  );
}
