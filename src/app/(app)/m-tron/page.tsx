import MTronClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "M-Tron | Shirley Lyu",
};

export default async function MTron() {
  const payload = await getPayloadHMR({
    config,
  });
  const mTronData = (
    await payload.find({
      collection: "project",
      where: {
        uri: { equals: "m-tron" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={mTronData.backgroundColor}>
      <MTronClient
        topChildren={<TopDisplay project={mTronData} payload={payload} />}
      >
        <ProjectNavigation prev="/sunrise" textColor="text-white" />
      </MTronClient>
    </Scroller>
  );
}
