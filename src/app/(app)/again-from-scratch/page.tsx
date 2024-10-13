import AgainFromScratchClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Again From Scratch | Shirley Lyu",
};

export default function AgainFromScratch() {
  const againFromScratchProjectData = projectsData["again-from-scratch"];
  return (
    <Scroller bgColor={againFromScratchProjectData.bgColor}>
      <AgainFromScratchClient
        topChildren={<TopDisplay project={againFromScratchProjectData} />}
      >
        <ProjectNavigation prev="/overlap" next="/sunrise" />
      </AgainFromScratchClient>
    </Scroller>
  );
}
