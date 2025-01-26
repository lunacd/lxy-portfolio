import OverlapClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import AnimationCoordinator from "@/components/AnimationCoordinator";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Overlap | Shirley Lyu",
};

export default async function Overlap() {
  const payload = await getPayload({
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
  const overlapPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Overlap" },
      },
    })
  ).docs[0];
  return (
    <AnimationCoordinator>
      <Scroller bgColor={overlapData.backgroundColor}>
        <OverlapClient
          topChildren={
            <>
              <TopDisplay project={overlapData} payload={payload} />
              <div className="w-single">
                <Blocks blocks={overlapPageData.blocks} payload={payload} />
              </div>
            </>
          }
        >
          <ProjectNavigation
            prev="/soul"
            next="/again-from-scratch"
            payload={payload}
          />
        </OverlapClient>
      </Scroller>
    </AnimationCoordinator>
  );
}
