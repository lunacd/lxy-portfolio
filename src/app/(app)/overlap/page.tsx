import OverlapClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import PageScaffold from "@/components/PageScaffold";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Overlap | Shirley Lyu",
};

export default async function Overlap() {
  const payload = await getPayloadHMR({
    config,
  });
  const overlapData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "overlap" },
      },
    })
  ).docs[0];
  return (
    <PageScaffold>
      <Scroller bgColor={overlapData.backgroundColor}>
        <OverlapClient
          topChildren={<TopDisplay project={overlapData} payload={payload} />}
        >
          <ProjectNavigation prev="/soul" next="/again-from-scratch" />
        </OverlapClient>
      </Scroller>
    </PageScaffold>
  );
}
