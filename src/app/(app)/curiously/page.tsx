import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import Block from "src/blocks/Block";

import FloatUpMotion from "@/components/FloatUpMotion";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

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
      depth: 2,
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
      <RelatedWork
        projects={curiouslyProjectData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </Scroller>
  );
}
