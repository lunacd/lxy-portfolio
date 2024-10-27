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
  const projectRoutes = projects.map((project) => {
    return {
      name: project.name,
      uri: project.uri,
      className: "paragraph",
    };
  });
  if (props.focus) {
    let insertLinkAfter = false;
    for (const mainFocus of Object.values(mainFocuses)) {
      const focusLink = {
        name: mainFocus.name,
        uri: `focus/${mainFocus.uri}`,
        className: "subtitle",
      };
      if (insertLinkAfter) {
        projectRoutes.push(focusLink);
      } else {
        projectRoutes.unshift(focusLink);
      }
      if (mainFocus.uri === props.focus) {
        insertLinkAfter = true;
      }
    }
  }

  return <SidebarInteractive projects={projectUris} routes={projectRoutes} />;
}
