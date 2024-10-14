import SoulClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Soul | Shirley Lyu",
};

export default async function Soul() {
  const payload = await getPayloadHMR({
    config,
  });
  const soulData = (
    await payload.find({
      collection: "project",
      where: {
        uri: { equals: "soul" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={soulData.backgroundColor}>
      <SoulClient
        topChildren={<TopDisplay project={soulData} payload={payload} />}
      >
        <ProjectNavigation prev="/lamboozled" next="/overlap" />
      </SoulClient>
    </Scroller>
  );
}
