import TuraClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import PageScaffold from "@/components/PageScaffold";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Tura | Shirley Lyu",
};

export default async function Tura() {
  const payload = await getPayloadHMR({
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
    <PageScaffold>
      <Scroller bgColor={turaData.backgroundColor}>
        <TuraClient
          topChildren={<TopDisplay project={turaData} payload={payload} />}
        >
          <ProjectNavigation prev="/overlap" next="/soul" />
        </TuraClient>
      </Scroller>
    </PageScaffold>
  );
}
