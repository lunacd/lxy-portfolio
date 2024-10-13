import MTronClient from "./page.client";
import { Metadata } from "next";

import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";

export const metadata: Metadata = {
  title: "M-Tron | Shirley Lyu",
};

export default function MTron() {
  const mTronData = projectsData["m-tron"];
  return (
    <Scroller bgColor={mTronData.bgColor}>
      <MTronClient
        topChildren={
          <TopDisplay project={mTronData} displayDescriptionOnMobile={true} />
        }
      >
        <ProjectNavigation prev="/sunrise" textColor="text-white" />
      </MTronClient>
    </Scroller>
  );
}
