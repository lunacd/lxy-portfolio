import SoulClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

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
  return (
    <Scroller bgColor={soulData.backgroundColor}>
      <SoulClient
        topChildren={<TopDisplay project={soulData} payload={payload} />}
      ></SoulClient>
      <RelatedWork
        color={soulData.contentColor}
        projects={soulData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </Scroller>
  );
}
