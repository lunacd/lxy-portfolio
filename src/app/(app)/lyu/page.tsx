import LyuClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import ConnectPrompt from "@/components/ConnectPrompt";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Lyu | Shirley Lyu",
};

export default async function Lyu() {
  const payload = await getPayloadHMR({
    config,
  });
  const lyuData = (
    await payload.find({
      collection: "project",
      where: {
        uri: { equals: "lyu" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={lyuData.backgroundColor}>
      <LyuClient
        topChildren={<TopDisplay project={lyuData} payload={payload} />}
      >
        <ConnectPrompt />
      </LyuClient>
    </Scroller>
  );
}
