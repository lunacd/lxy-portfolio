import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import "server-only";

import SidebarInteractive from "@/sections/SidebarInteractive";
import { getMainProjects, getProjectsWithFocus } from "@/utils/payloadHelpers";
import { mainFocuses } from "@/utils/projectData";

interface SidebarProps {
  focus?: string;
}

export default async function Sidebar(props: SidebarProps) {
  const payload = await getPayloadHMR({
    config,
  });
  const projects = props.focus
    ? await getProjectsWithFocus(props.focus, payload)
    : await getMainProjects(payload);
  const projectUris = projects.map((project) => project.uri);
  let projectRoutes = projects.map((project) => {
    return {
      name: project.name,
      uri: project.uri,
      className: "paragraph",
    };
  });
  if (props.focus) {
    let insertRouteAfter = false;
    const prefixRoutes = [];
    for (const mainFocus of Object.values(mainFocuses)) {
      const focusLink = {
        name: mainFocus.name,
        uri: `focus/${mainFocus.uri}`,
        className: "subtitle",
      };
      if (insertRouteAfter) {
        projectRoutes.push(focusLink);
      } else {
        prefixRoutes.push(focusLink);
      }
      if (mainFocus.uri === props.focus) {
        insertRouteAfter = true;
      }
    }
    projectRoutes = prefixRoutes.concat(projectRoutes);
  }

  return <SidebarInteractive projects={projectUris} routes={projectRoutes} />;
}
