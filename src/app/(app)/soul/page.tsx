import SoulClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import ProjectNavigation from "@/components/ProjectNavigation";
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
    })
  ).docs[0];
  return (
    <Scroller bgColor={soulData.backgroundColor}>
      <SoulClient
        topChildren={<TopDisplay project={soulData} payload={payload} />}
      >
        <ProjectNavigation
          prev="/lamboozled"
          next="/overlap"
          payload={payload}
        />
      </SoulClient>
    </Scroller>
  );
}
