import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import ProjectsGallery from "@/components/ProjectsGallery";
import Scroller from "@/components/Scroller";

export const metadata: Metadata = {
  title: "Other Projects | Shirley Lyu",
};

export default async function Others() {
  const payload = await getPayload({
    config,
  });
  const projects = (
    await payload.find({
      collection: "projects",
      pagination: false,
      where: {
        isMainProject: {
          equals: false,
        },
      },
      sort: "order",
    })
  ).docs;
  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      <ProjectsGallery projects={projects} payload={payload} />
    </Scroller>
  );
}
