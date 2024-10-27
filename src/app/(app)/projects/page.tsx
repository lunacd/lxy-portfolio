import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Metadata } from "next";

import PageScaffold from "@/components/PageScaffold";
import ProjectsGallery from "@/components/ProjectsGallery";
import Scroller from "@/components/Scroller";

export const metadata: Metadata = {
  title: "Projects | Shirley Lyu",
};

export default async function Projects() {
  const payload = await getPayloadHMR({
    config,
  });
  const projects = (
    await payload.find({
      collection: "projects",
      pagination: false,
      where: {
        isMainProject: {
          equals: true,
        },
      },
      sort: "order",
    })
  ).docs;
  return (
    <PageScaffold>
      <Scroller bgColor="bg-[#FDF9F1]">
        <ProjectsGallery projects={projects} payload={payload} />
      </Scroller>
    </PageScaffold>
  );
}
