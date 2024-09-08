"use client";

import EqualSplit from "@/components/EqualSplit";
import Scroller from "@/components/Scroller";
import TextSection, { createPlainContent } from "@/components/TextSection";
import Title from "@/sections/Title";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";
import useScroll from "@/utils/useScroll";

export default function TuraClient() {
  const turaProjectData = projectsData["tura"];
  const scrollDiv = useScroll();
  return (
    <Scroller bgColor={turaProjectData.bgColor} divRef={scrollDiv}>
      <TopDisplay project={turaProjectData} animation={false} />

      {/* Overview */}
      <Title title="Overview" />
      <EqualSplit>
        <TextSection
          title="The Problem"
          content={createPlainContent([
            "Hard to find travel buddies that have similar interests.",
          ])}
          titleClass="subtitle"
        />
        <TextSection
          title="The Goal"
          content={createPlainContent([
            "A phone app to help users meet new travel buddies by gathering people with similar interests. Users can choose their comfortable ways to meet new people and make friends during trips.",
          ])}
          titleClass="subtitle"
        />
      </EqualSplit>

      {/* Project Ideation */}
      <Title title="Project Ideation" />
    </Scroller>
  );
}
