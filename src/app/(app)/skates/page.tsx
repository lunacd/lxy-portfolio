import SkatesClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Skates | Shirley Lyu",
};

export default async function Skates() {
  const payload = await getPayloadHMR({
    config,
  });
  const skatesData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "skates" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={skatesData.backgroundColor}>
      <SkatesClient
        topChildren={<TopDisplay project={skatesData} payload={payload} />}
      >
        <ProjectNavigation next="/tura" />
      </SkatesClient>
    </Scroller>
  );
}
