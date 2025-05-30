import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import Block from "src/blocks/Block";

import FloatUpMotion from "@/components/FloatUpMotion";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

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
      depth: 2,
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
      <RelatedWork
        color={lamboozledProjectData.contentColor}
        projects={lamboozledProjectData.relatedWorks.map(
          (relatedWork) => relatedWork.relatedWork,
        )}
        payload={payload}
      />
    </Scroller>
  );
}
