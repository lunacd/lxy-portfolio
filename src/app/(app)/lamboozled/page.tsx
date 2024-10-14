import LamboozledClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Lamboozled | Shirley Lyu",
};

export default async function Lamboozled() {
  const payload = await getPayloadHMR({
    config,
  });
  const lamboozledProjectData = (
    await payload.find({
      collection: "project",
      where: {
        uri: { equals: "lamboozled" },
      },
    })
  ).docs[0];

  return (
    <Scroller bgColor={lamboozledProjectData.backgroundColor}>
      <LamboozledClient
        topChildren={
          <TopDisplay project={lamboozledProjectData} payload={payload} />
        }
      >
        <ProjectNavigation prev="/tura" next="/again-from-scratch" />
      </LamboozledClient>
    </Scroller>
  );
}
