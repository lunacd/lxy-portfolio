import TuraClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Tura | Shirley Lyu",
};

export default async function Tura() {
  const payload = await getPayload({
    config,
  });
  const turaData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "tura" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={turaData.backgroundColor}>
      <TuraClient
        topChildren={<TopDisplay project={turaData} payload={payload} />}
      >
        <ProjectNavigation prev="/overlap" next="/soul" payload={payload} />
      </TuraClient>
    </Scroller>
  );
}
