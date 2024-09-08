"use client";

import EqualSplit from "@/components/EqualSplit";
import Scroller from "@/components/Scroller";
import TextSection, { createPlainContent } from "@/components/TextSection";
import Title from "@/sections/Title";
import { projectsData } from "@/utils/projectData";
import useScroll from "@/utils/useScroll";

export default function TuraClient() {
  const turaProjectData = projectsData["tura"];
  const scrollDiv = useScroll();
  return (
    <Scroller bgColor={turaProjectData.bgColor} divRef={scrollDiv}>
      <Title title="Overview" />
      <EqualSplit>
        <TextSection
          title="The Problem"
          content={createPlainContent([
            "Hard to find travel buddies that have similar interests.",
          ])}
        />
        <TextSection
          title="The Goal"
          content={createPlainContent([
            "A phone app to help users meet new travel buddies by gathering people with similar interests. Users can choose their comfortable ways to meet new people and make friends during trips.",
          ])}
        />
      </EqualSplit>
    </Scroller>
  );
}
