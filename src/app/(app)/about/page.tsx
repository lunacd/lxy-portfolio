import AboutClient from "./page.client";
import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import AnimationCoordinator from "@/components/AnimationCoordinator";
import PayloadImage from "@/components/PayloadImage";

export const metadata: Metadata = {
  title: "About | Shirley Lyu",
};

export default async function About() {
  const payload = await getPayload({
    config,
  });
  const data = await payload.findGlobal({
    slug: "global",
  });
  return (
    <AnimationCoordinator>
      <AboutClient>
        <div className="single my-spacing-lg gap-spacing grid grid-cols-1 lg:grid-cols-3">
          <div className="about_rounded">
            <PayloadImage
              media={data.profilePicture}
              payload={payload}
              sizes="(max-width: 1023px) 100vw,(min-width: 1024px) 33vw"
            />
          </div>
          <div className="lg:col-span-2 lg:self-end">{data.profile}</div>
        </div>
      </AboutClient>
    </AnimationCoordinator>
  );
}
