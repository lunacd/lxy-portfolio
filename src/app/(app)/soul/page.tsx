import SoulClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Soul | Shirley Lyu",
};

export default function Soul() {
  const soulData = projectsData["soul"];
  return (
    <Scroller bgColor={soulData.bgColor}>
      <SoulClient
        topChildren={
          <TopDisplay project={soulData} displayDescriptionOnMobile={true} />
        }
      >
        <ProjectNavigation prev="/lamboozled" next="/overlap" />
      </SoulClient>
    </Scroller>
  );
}
