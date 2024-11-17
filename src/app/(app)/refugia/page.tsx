import RefugiaClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

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
    })
  ).docs[0];
  return (
    <Scroller bgColor={refugiaData.backgroundColor}>
      <RefugiaClient
        topChildren={<TopDisplay project={refugiaData} payload={payload} />}
      >
        <ConnectPrompt payload={payload} />
      </RefugiaClient>
    </Scroller>
  );
}
