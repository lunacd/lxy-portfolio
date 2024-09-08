"use client";

import Scroller from "@/components/Scroller";
import { projectsData } from "@/utils/projectData";
import useScroll from "@/utils/useScroll";
import Title from "@/sections/Title";

export default function TuraClient() {
  const turaProjectData = projectsData["tura"];
  const scrollDiv = useScroll();
  return (
    <Scroller bgColor={turaProjectData.bgColor} divRef={scrollDiv}>
      <Title title="Overview"/>
      <div></div>
    </Scroller>
  );
}
