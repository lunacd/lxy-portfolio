import OverlapClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Overlap | Shirley Lyu",
};

export default function Overlap() {
  const overlapData = projectsData["overlap"];
  return (
    <Scroller bgColor={overlapData.bgColor}>
      <OverlapClient
        topChildren={
          <TopDisplay project={overlapData} displayDescriptionOnMobile={true} />
        }
      >
        <ProjectNavigation prev="/soul" next="/again-from-scratch" />
      </OverlapClient>
    </Scroller>
  );
}
