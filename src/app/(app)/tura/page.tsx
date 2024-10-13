import TuraClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Tura | Shirley Lyu",
};

export default function Sunrise() {
  const turaProjectData = projectsData["tura"];
  return (
    <Scroller bgColor={turaProjectData.bgColor}>
      <TuraClient topChildren={<TopDisplay project={turaProjectData} />}>
        <ProjectNavigation prev="/overlap" next="/soul" />
      </TuraClient>
    </Scroller>
  );
}
