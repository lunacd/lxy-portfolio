import config from "@payload-config";
import { Project } from "@payload-types";
import { getPayload } from "payload";
import "server-only";

import SidebarInteractive from "@/components/SidebarInteractive";
import { getMainProjects, getProjectsWithFocus } from "@/utils/payloadHelpers";
import { mainFocuses } from "@/utils/projectData";

export default async function Sidebar() {
  const payload = await getPayload({
    config,
  });
  const allProjects = await getMainProjects(payload);
  const projectFocusList = await Promise.all(
    Object.values(mainFocuses).map(async (mainFocus) => {
      return {
        projects: await getProjectsWithFocus(mainFocus.uri, payload),
        uri: mainFocus.uri,
      };
    }),
  );
  const projectsWithFocus = projectFocusList.reduce<{
    [uri: string]: Project[];
  }>((prev, curr) => {
    prev[curr.uri] = curr.projects;
    return prev;
  }, {});

  return (
    <SidebarInteractive
      allProjects={allProjects}
      projectsWithFocus={projectsWithFocus}
    />
  );
}
