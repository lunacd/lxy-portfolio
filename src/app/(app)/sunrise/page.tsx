import SunriseClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Sunrise | Shirley Lyu",
};

export default function Sunrise() {
  const sunriseData = projectsData["sunrise"];
  return (
    <Scroller bgColor={sunriseData.bgColor}>
      <SunriseClient topChildren={<TopDisplay project={sunriseData} />}>
        <ProjectNavigation prev="/again-from-scratch" next="/m-tron" />
      </SunriseClient>
    </Scroller>
  );
}
