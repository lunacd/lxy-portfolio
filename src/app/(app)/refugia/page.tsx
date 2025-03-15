import RefugiaClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

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
  return (
    <Scroller bgColor={refugiaData.backgroundColor}>
      <RefugiaClient
        topChildren={<TopDisplay project={refugiaData} payload={payload} />}
      >
        <ConnectPrompt payload={payload} />
      </RefugiaClient>
      <RelatedWork
        color={refugiaData.textColor}
        projects={refugiaData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </Scroller>
  );
}
