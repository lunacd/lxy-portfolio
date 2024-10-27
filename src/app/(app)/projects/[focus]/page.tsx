import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { notFound } from "next/navigation";
import React from "react";

import ProjectsGallery from "@/components/ProjectsGallery";
import Scroller from "@/components/Scroller";
import { getProjectsWithFocus } from "@/utils/payloadHelpers";

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
  if (projects.length === 0) {
    notFound();
  }
  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      <div className="single title mt-spacing">{focusName} Projects</div>
      <ProjectsGallery payload={payload} projects={projects} />
    </Scroller>
  );
}
