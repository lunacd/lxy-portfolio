import MTronClient from "./page.client";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import AnimationCoordinator from "@/components/AnimationCoordinator";
import FloatUpMotion from "@/components/FloatUpMotion";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import Block from "@/sections/Block";
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
      collection: "projects",
      where: {
        uri: { equals: "m-tron" },
      },
    })
  ).docs[0];
  const mTronPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "M-Tron" },
      },
    })
  ).docs[0];

  return (
    <AnimationCoordinator>
      <Scroller
        bgColor={mTronData.pageBackgroundColor ?? mTronData.backgroundColor}
      >
        <MTronClient
          topChildren={
            <>
              <TopDisplay project={mTronData} payload={payload} />
              {mTronPageData.blocks.map((block, index) => (
                <FloatUpMotion className="single" key={index}>
                  <Block block={block} payload={payload} />
                </FloatUpMotion>
              ))}
            </>
          }
        >
          <ProjectNavigation prev="/sunrise" textColor="text-white" />
        </MTronClient>
      </Scroller>
    </AnimationCoordinator>
  );
}
