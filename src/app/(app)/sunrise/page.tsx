import SunriseClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Sunrise | Shirley Lyu",
};

export default async function Sunrise() {
  const payload = await getPayloadHMR({
    config,
  });
  const sunriseData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "sunrise" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={sunriseData.backgroundColor}>
      <SunriseClient
        topChildren={<TopDisplay project={sunriseData} payload={payload} />}
      >
        <ProjectNavigation prev="/again-from-scratch" next="/m-tron" />
      </SunriseClient>
    </Scroller>
  );
}
