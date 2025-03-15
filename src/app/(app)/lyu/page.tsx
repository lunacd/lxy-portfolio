import LyuClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import ConnectPrompt from "@/components/ConnectPrompt";
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
  return (
    <Scroller bgColor={lyuData.backgroundColor}>
      <LyuClient
        topChildren={<TopDisplay project={lyuData} payload={payload} />}
      >
        <ConnectPrompt payload={payload} />
      </LyuClient>
      <RelatedWork
        color={lyuData.textColor}
        projects={lyuData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </Scroller>
  );
}
