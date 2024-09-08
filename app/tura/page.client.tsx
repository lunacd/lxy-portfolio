"use client";

import Image from "next/image";

import DisplayImage from "@/components/DisplayImage";
import EqualSplit from "@/components/EqualSplit";
import Scroller from "@/components/Scroller";
import Spacing from "@/components/Spacing";
import TextSection, {
  TextAlignment,
  TextContentType,
  createPlainContent,
} from "@/components/TextSection";
import HorizontalGallery from "@/sections/HorizontalGallery";
import Title, { Subtitle } from "@/sections/Title";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";
import useScroll from "@/utils/useScroll";

import Competitive1 from "@/images/tura/competitive/competitive-1-small.webp";
import Competitive2 from "@/images/tura/competitive/competitive-2-small.webp";
import Competitive3 from "@/images/tura/competitive/competitive-3-small.webp";
import Ideation1 from "@/images/tura/ideation/ideation-1-half.webp";
import Ideation2 from "@/images/tura/ideation/ideation-2-half.webp";
import PositioningMatrix from "@/images/tura/matrix-full.webp";

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
      <Spacing size="large" />

      {/* Project Ideation */}
      <Title title="Project Ideation" />
      <Subtitle title="Competitive Research" />
      <HorizontalGallery
        items={[
          {
            image: Competitive1,
            title: "Unite Strangers",
            content: [
              {
                type: TextContentType.Normal,
                text: "A website for strangers to meet and travel together",
              },
              {
                type: TextContentType.Subtitle,
                text: "Pro",
              },
              {
                type: TextContentType.Normal,
                text: "Curated trips, application form for trips",
              },
              {
                type: TextContentType.Subtitle,
                text: "Con",
              },
              {
                type: TextContentType.Normal,
                text: "Self-organized trips, no obvious security measures",
              },
            ],
          },
          {
            image: Competitive2,
            title: "Adequate Travel",
            content: [
              {
                type: TextContentType.Normal,
                text: "An app to primarily to compare hotel prices worldwide and find the best and cheap hotel deals from all hotel booking sites",
              },
              {
                type: TextContentType.Subtitle,
                text: "Pro",
              },
              {
                type: TextContentType.Normal,
                text: "Fully featured with booking and planning",
              },
              {
                type: TextContentType.Subtitle,
                text: "Con",
              },
              {
                type: TextContentType.Normal,
                text: "Not built for stranger traveling, although it is theoretically possible，strangers must meet through stories and negotiate their own trips",
              },
            ],
          },
          {
            image: Competitive3,
            title: "You Xiake (游侠客）",

            content: [
              {
                type: TextContentType.Normal,
                text: "An app that provide you many travelling schedules to choose. You need to group with strangers and be leaded by a tour guider.",
              },
              {
                type: TextContentType.Subtitle,
                text: "Pro",
              },
              {
                type: TextContentType.Normal,
                text: "Fully featured with hotels and transportations, fully planned trips, travel-guide moderated trips (safe)",
              },
              {
                type: TextContentType.Subtitle,
                text: "Con",
              },
              {
                type: TextContentType.Normal,
                text: "No personalized trips, no option for solo trips, no oriented towards friendship-building",
              },
            ],
          },
        ]}
        width={640}
        height={327}
        alignment={TextAlignment.Left}
      />

      <EqualSplit>
        <div>
          <TextSection title="Journal Ideation" />
          <Image src={Ideation1} alt="Journal Ideation" />
        </div>
        <div>
          <TextSection title="Scenarios" />
          <Image src={Ideation2} alt="Scenarios" />
          <EqualSplit fill>
            <TextSection
              titleClass="subtitle"
              content={[
                { type: TextContentType.Subtitle, text: "Before" },
              ].concat(
                createPlainContent([
                  "- Little communication",
                  "- No similar hobbies",
                ]),
              )}
            ></TextSection>
            <TextSection
              content={[
                { type: TextContentType.Subtitle, text: "After" },
              ].concat(
                createPlainContent([
                  "- Closer to each other",
                  "- Trust each other",
                ]),
              )}
            ></TextSection>
          </EqualSplit>
        </div>
      </EqualSplit>
      <Spacing size="large" />

      {/* Positioning Matrix */}
      <Title title="Positioning Matrix" />
      <DisplayImage
        source={{
          frames: [{ src: PositioningMatrix }],
          width: 1920,
          height: 744,
        }}
        alt="Positioning matrix"
      />
    </Scroller>
  );
}
