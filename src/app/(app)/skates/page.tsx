import SkatesClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Blocks from "@/blocks/Blocks";
import ConnectPrompt from "@/components/ConnectPrompt";
import RelatedWork from "@/components/RelatedWork";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Skates | Shirley Lyu",
};

export default async function Skates() {
  const payload = await getPayload({
    config,
  });
  const skatesData = (
    await payload.find({
      collection: "projects",
      where: {
        uri: { equals: "skates" },
      },
      depth: 2,
    })
  ).docs[0];
  const skatesPageData = (
    await payload.find({
      collection: "projectPages",
      where: {
        projectName: { equals: "Skates" },
      },
    })
  ).docs[0];
  return (
    <Scroller bgColor={skatesData.backgroundColor}>
      <SkatesClient
        topChildren={
          <>
            <TopDisplay project={skatesData} payload={payload} />
            <Blocks blocks={skatesPageData.blocks} payload={payload} />
          </>
        }
      >
        <RelatedWork
          color={skatesData.contentColor}
          projects={skatesData.relatedWorks.map(
            (relatedWork) => relatedWork.relatedWork,
          )}
          payload={payload}
        />
        <ConnectPrompt payload={payload} />
      </SkatesClient>
    </Scroller>
  );
}
