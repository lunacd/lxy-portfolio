import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import React from "react";

import LegacyProjectsGallery from "@/components/LegacyProjectsGallery";
import Scroller from "@/components/Scroller";
import { getProjectsWithFocus, inferFocusName } from "@/utils/payloadHelpers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ focus: string }>;
}) {
  const payload = await getPayload({
    config,
  });
  const projectFocus = (await params).focus;
  const projectsWithFocus = await getProjectsWithFocus(projectFocus, payload);
  const focusName = await inferFocusName(projectsWithFocus, projectFocus);
  return {
    title: `${focusName} Projects | Shirley Lyu`,
  };
}

export default async function ProjectsCategory({
  params,
}: {
  params: Promise<{ focus: string }>;
}) {
  const payload = await getPayload({
    config,
  });
  const projectFocus = (await params).focus;
  const projects = await getProjectsWithFocus(projectFocus, payload);
  const focusName = inferFocusName(projects, projectFocus);
  if (projects.length === 0) {
    notFound();
  }
  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      <div className="single title mt-spacing">{focusName} Projects</div>
      <LegacyProjectsGallery payload={payload} projects={projects} />
    </Scroller>
  );
}
