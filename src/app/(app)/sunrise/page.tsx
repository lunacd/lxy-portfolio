import SunriseClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import Scroller from "@/components/Scroller";
import TopDisplay from "@/components/TopDisplay";

export const metadata: Metadata = {
  title: "Sunrise | Shirley Lyu",
};

export default async function Sunrise() {
  const payload = await getPayload({
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
      </SunriseClient>
    </Scroller>
  );
}
