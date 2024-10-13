import LamboozledClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "Lamboozled | Shirley Lyu",
};

export default function Lamboozled() {
  const lamboozledProjectData = projectsData["lamboozled"];
  return (
    <Scroller bgColor={lamboozledProjectData.bgColor}>
      <LamboozledClient
        topChildren={<TopDisplay project={lamboozledProjectData} />}
      >
        <ProjectNavigation prev="/tura" next="/again-from-scratch" />
      </LamboozledClient>
    </Scroller>
  );
}
