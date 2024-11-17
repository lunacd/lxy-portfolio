import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import FloatUpMotion from "@/components/FloatUpMotion";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import Block from "@/sections/Block";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Lamboozled | Shirley Lyu",
};

export default async function Lamboozled() {
  const payload = await getPayload({
    config,
  });
  const lamboozledProjectData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "lamboozled" },
      },
    })
  ).docs[0];
  const lamboozledPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Lamboozled" },
      },
    })
  ).docs[0];

  return (
    <Scroller bgColor={lamboozledProjectData.backgroundColor}>
      <TopDisplay project={lamboozledProjectData} payload={payload} />
      {lamboozledPageData.blocks.map((block, index) => (
        <FloatUpMotion className="single" key={index}>
          <Block block={block} payload={payload} />
        </FloatUpMotion>
      ))}
      <ProjectNavigation
        prev="/tura"
        next="/again-from-scratch"
        payload={payload}
      />
    </Scroller>
  );
}
