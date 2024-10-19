"use client";

import { PropsWithChildren, ReactNode } from "react";

import Button from "@/components/Button";
import Spacing from "@/components/Spacing";
import { TextAlignment, createPlainContent } from "@/components/TextSection";
import { StaticDisplayImage } from "@/sections/DisplayImage";
import HorizontalGallery from "@/sections/HorizontalGallery";
import LegacyTitle from "@/sections/LegacyTitle";

import Challenge from "@/images/againfromscratch/challenge-full.webp";
import Design from "@/images/againfromscratch/design-full.webp";
import ChallengeAndLearningGoals from "@/images/againfromscratch/learning-goals-full.webp";
import Making from "@/images/againfromscratch/making-full.webp";
import MaterialAnalysis from "@/images/againfromscratch/material-analysis-full.webp";
import MaterialChosen2 from "@/images/againfromscratch/material-chosen-2-full.webp";
import MaterialChosen from "@/images/againfromscratch/material-chosen-full.webp";
import VirtualDesignMock from "@/images/againfromscratch/mock-full.webp";
import MoreChallenges from "@/images/againfromscratch/more-challenges-full.webp";
import PhysicalConstruction from "@/images/againfromscratch/physical-construction-full.webp";
import Reflection from "@/images/againfromscratch/reflection-full.webp";
import Target1 from "@/images/againfromscratch/target/target-1-small.webp";
import Target2 from "@/images/againfromscratch/target/target-2-small.webp";
import Target3 from "@/images/againfromscratch/target/target-3-small.webp";

interface AgainFromScratchProps {
  topChildren: ReactNode;
}

export default function AgainFromScratchClient(
  props: PropsWithChildren<AgainFromScratchProps>,
) {
  return (
    <>
      {props.topChildren}

      <HorizontalGallery
        items={[
          { title: "High School Students", image: Target1 },
          {
            title: "Schools",
            image: Target2,
            content: createPlainContent([
              "- For classes about making, design, engineering, and science",
              "- Instructor guided",
              "- Project-based and design-based",
              "- Problem-solving & creativity",
            ]),
          },
          {
            title: "Makerspace",
            content: createPlainContent([
              "- For workshops related to recycling, design, engineering and geometry",
              "- Instructor guided",
              "- Project-based and design-based",
              "- Problem-solving & creativity",
            ]),
            image: Target3,
          },
        ]}
        width={640}
        height={302}
        alignment={TextAlignment.Left}
      />

      <LegacyTitle title="Demo Video" />
      <iframe
        src="https://www.youtube.com/embed/BAmrcNcXZ_s?si=V7DR5vdgS3Juudky"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-single"
      ></iframe>
      <Spacing size="large" />

      <LegacyTitle title="Research Paper" />
      <Button text="Read the Paper" href="/againfromscratch.pdf" />
      <Spacing size="large" />

      <LegacyTitle title="Design Details" />
      <StaticDisplayImage
        src={Design}
        width={1920}
        height={989}
        alt="Design"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={Challenge}
        width={1920}
        height={989}
        alt="Step 1: Challenge"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={ChallengeAndLearningGoals}
        width={1920}
        height={989}
        alt="Challenges and Learning Goals"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={MaterialAnalysis}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={MaterialChosen}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={MaterialChosen2}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={PhysicalConstruction}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={VirtualDesignMock}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={Making}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={Reflection}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
        botSpacing={false}
      />
      <StaticDisplayImage
        src={MoreChallenges}
        width={1920}
        height={989}
        alt="Material Analysis"
        xSpacing
      />

      {props.children}
    </>
  );
}
