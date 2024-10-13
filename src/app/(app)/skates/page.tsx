import SkatesClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Skates | Shirley Lyu",
};

export default function Skates() {
  const skatesData = projectsData["skates"];
  return (
    <Scroller bgColor={skatesData.bgColor}>
      <SkatesClient
        topChildren={
          <TopDisplay project={skatesData} displayDescriptionOnMobile={true} />
        }
      >
        <ProjectNavigation next="/tura" />
      </SkatesClient>
    </Scroller>
  );
}
