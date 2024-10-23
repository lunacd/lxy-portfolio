import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { Payload, Where } from "payload";
import React from "react";

import ProjectsGallery from "@/components/ProjectsGallery";
import Scroller from "@/components/Scroller";

const getProjectsWithFocus = React.cache(
  async (focusId: string, payload: Payload) => {
    const query: Where = {
      "focuses.focusId": {
        equals: focusId,
      },
      isMainProject: {
        equals: true,
      },
    };
    const projects = (
      await payload.find({
        collection: "projects",
        pagination: false,
        where: query,
      })
    ).docs;

    let focusName = undefined;
    if (projects.length > 0) {
      focusName = projects[0].focuses!.find(
        (focus) => focus.focusId === focusId,
      )?.focus;
    }
    return { projects: projects, focusName: focusName };
  },
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ focus: string }>;
}) {
  const payload = await getPayloadHMR({
    config,
  });
  const projectFocus = (await params).focus;
  const { focusName } = await getProjectsWithFocus(projectFocus, payload);
  return {
    title: `${focusName} Projects | Shirley Lyu`,
  };
}

export default async function ProjectsCategory({
  params,
}: {
  params: Promise<{ focus: string }>;
}) {
  const payload = await getPayloadHMR({
    config,
  });
  const projectFocus = (await params).focus;
  const { projects, focusName } = await getProjectsWithFocus(
    projectFocus,
    payload,
  );
  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      {projects.length === 0 && (
        <div className="title">No projects found :(</div>
      )}
      {projects.length > 0 && (
        <>
          <div className="single title mt-spacing">{focusName} Projects</div>
          <ProjectsGallery payload={payload} projects={projects} />
        </>
      )}
    </Scroller>
  );
}
