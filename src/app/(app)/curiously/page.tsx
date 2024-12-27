import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import FloatUpMotion from "@/components/FloatUpMotion";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import Block from "@/sections/Block";
import TopDisplay from "@/sections/TopDisplay";

export const metadata: Metadata = {
  title: "Curiously | Shirley Lyu",
};

export default async function Lamboozled() {
  const payload = await getPayload({
    config,
  });
  const curiouslyProjectData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "curiously" },
      },
    })
  ).docs[0];
  const curiouslyPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Curiously" },
      },
    })
  ).docs[0];

  return (
    <Scroller bgColor={curiouslyProjectData.backgroundColor}>
      <TopDisplay project={curiouslyProjectData} payload={payload} />
      {curiouslyPageData.blocks.map((block, index) => (
        <FloatUpMotion className="single" key={index}>
          <Block block={block} payload={payload} />
        </FloatUpMotion>
      ))}
      <ProjectNavigation
        prev="/tura"
        next="/lamboozled"
        payload={payload}
      />
    </Scroller>
  );
}
