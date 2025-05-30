"use client";

import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

import Button from "@/components/Button";
import LegacyCarousel from "@/components/LegacyCarousel";
import LegacyDisplayImage, {
  LegacyStaticDisplayImage,
} from "@/components/LegacyDisplayImage";
import LegacyEqualSplit from "@/components/LegacyEqualSplit";
import LegacyHorizontalGallery from "@/components/LegacyHorizontalGallery";
import LegacyHorizontalScroll from "@/components/LegacyHorizontalScroll";
import LegacyLargeGallery from "@/components/LegacyLargeGallery";
import LegacySpacing from "@/components/LegacySpacing";
import { RichTextImage } from "@/components/LegacyTextImage";
import LegacyTextSection, {
  TextAlignment,
  TextContentType,
  createPlainContent,
} from "@/components/LegacyTextSection";
import LegacyTitle, { LegacySubtitle } from "@/components/LegacyTitle";

import Competitive1 from "@/images/tura/competitive/competitive-1-small.webp";
import Competitive2 from "@/images/tura/competitive/competitive-2-small.webp";
import Competitive3 from "@/images/tura/competitive/competitive-3-small.webp";
import Feature1 from "@/images/tura/feature/feature-1-full.webp";
import Feature2 from "@/images/tura/feature/feature-2-full.webp";
import Feature3 from "@/images/tura/feature/feature-3-full.webp";
import Feature4 from "@/images/tura/feature/feature-4-full.webp";
import Feature5 from "@/images/tura/feature/feature-5-full.webp";
import Feature6 from "@/images/tura/feature/feature-6-full.webp";
import Final1 from "@/images/tura/final/final-1-full.webp";
import Final2 from "@/images/tura/final/final-2-full.webp";
import Final3 from "@/images/tura/final/final-3-full.webp";
import Final4 from "@/images/tura/final/final-4-full.webp";
import Final5 from "@/images/tura/final/final-5-full.webp";
import Final6 from "@/images/tura/final/final-6-full.webp";
import Ideation1 from "@/images/tura/ideation/ideation-1-half.webp";
import Ideation2 from "@/images/tura/ideation/ideation-2-half.webp";
import Interview1 from "@/images/tura/interview/interview-1-full.webp";
import Interview2 from "@/images/tura/interview/interview-2-full.webp";
import Interview3 from "@/images/tura/interview/interview-3-full.webp";
import Interview4 from "@/images/tura/interview/interview-4-full.webp";
import Interview5 from "@/images/tura/interview/interview-5-full.webp";
import Interview6 from "@/images/tura/interview/interview-6-full.webp";
import JourneyMap from "@/images/tura/journey-full.webp";
import Logo from "@/images/tura/logo-half.webp";
import PositioningMatrix from "@/images/tura/matrix-full.webp";
import Moodboard from "@/images/tura/moodboard-full.webp";
import Persona from "@/images/tura/persona-full.webp";
import Scenario from "@/images/tura/scenario-full.webp";
import Structure from "@/images/tura/structure-full.webp";
import ColorTheme from "@/images/tura/theme-full.webp";
import Wireframe from "@/images/tura/wireframe-4x.webp";

interface TuraProps {
  topChildren: ReactNode;
}

export default function TuraClient(props: PropsWithChildren<TuraProps>) {
  return (
    <>
      {props.topChildren}

      {/* Overview */}
      <LegacyTitle title="Overview" />
      <LegacyEqualSplit>
        <LegacyTextSection
          title="The Problem"
          content={createPlainContent([
            "Hard to find travel buddies that have similar interests.",
          ])}
          titleClass="subtitle"
        />
        <LegacyTextSection
          title="The Goal"
          content={createPlainContent([
            "A phone app to help users meet new travel buddies by gathering people with similar interests. Users can choose their comfortable ways to meet new people and make friends during trips.",
          ])}
          titleClass="subtitle"
        />
      </LegacyEqualSplit>
      <LegacySpacing size="large" />

      {/* Project Ideation */}
      <LegacyTitle title="Project Ideation" />
      <LegacySubtitle title="Competitive Research" />
      <LegacyHorizontalGallery
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

      <LegacyEqualSplit>
        <div>
          <LegacyTextSection
            content={[
              { type: TextContentType.Subtitle, text: "Journal Ideation" },
            ]}
          />
          <Image src={Ideation1} alt="Journal Ideation" unoptimized />
        </div>
        <div>
          <LegacyTextSection
            content={[{ type: TextContentType.Subtitle, text: "Scenarios" }]}
          />
          <Image src={Ideation2} alt="Scenarios" unoptimized />
          <LegacyEqualSplit fill>
            <LegacyTextSection
              titleClass="subtitle"
              content={[
                { type: TextContentType.Subtitle, text: "Before" },
              ].concat(
                createPlainContent([
                  "- Little communication",
                  "- No similar hobbies",
                ]),
              )}
            ></LegacyTextSection>
            <LegacyTextSection
              content={[
                { type: TextContentType.Subtitle, text: "After" },
              ].concat(
                createPlainContent([
                  "- Closer to each other",
                  "- Trust each other",
                ]),
              )}
            ></LegacyTextSection>
          </LegacyEqualSplit>
        </div>
      </LegacyEqualSplit>
      <LegacySpacing size="large" />

      {/* Positioning Matrix */}
      <LegacySubtitle title="Positioning Matrix" />
      <LegacyDisplayImage
        source={{
          frames: [{ src: PositioningMatrix }],
          width: 1920,
          height: 744,
        }}
        alt="Positioning matrix"
      />

      {/* Mission Statement */}
      <LegacySubtitle title="Mission Statement" />
      <div className="w-single flex justify-center">
        <div className="w-2/3">
          <LegacyTextSection
            content={createPlainContent([
              "My mission is to gather people who love traveling and have similar interests by matching their information. Users can choose their comfortable ways (self-planned, other-planned, or I-planned) to meet new people and make friends during trips.",
            ])}
          />
        </div>
      </div>
      <LegacySpacing size="large" />

      {/* User Research */}
      <LegacyTitle title="User Research" />

      <LegacySubtitle title="Interviews" />
      <LegacyCarousel
        images={[
          Interview1,
          Interview2,
          Interview3,
          Interview4,
          Interview5,
          Interview6,
        ]}
        description="Interviews"
        height={959}
        width={1920}
      />

      <LegacySubtitle title="Persona" />
      <LegacyDisplayImage
        source={{ frames: [{ src: Persona }], width: 1920, height: 1187 }}
        alt="Persona"
        xSpacing
      />

      <LegacySubtitle title="Moodboard" />
      <LegacyDisplayImage
        source={{ frames: [{ src: Moodboard }], height: 827, width: 1920 }}
        alt="Moodboard"
      />

      <LegacySubtitle title="Text Scenario" />
      <LegacyEqualSplit>
        <div>
          <div>
            - Kiki loves traveling and listening to different people’s stories.
          </div>
          <div>
            - There is a 4-day holiday for her 2 days later. She is planning to
            have a short trip to relax and make new friends with similar
            interests.
          </div>
          <div>
            - She opens <strong>Tura</strong>. At first, Kiki selects her
            interests among the different provided options. Then, she inputs her
            budget time into the app.
          </div>
          <div>
            - <strong>Tura</strong> provides her with several travel groups’
            information as suggestions according to Kiki’s input. By looking at
            the detailed suggestion pages, Kiki can know not only the schedule
            and budget of the trip but also the information of other travel
            companions.
          </div>
          <div>
            Kiki likes the apps first suggestion. Therefore, she enters the trip
            group chat to talk about the schedule details like tickets and
            hotel.
          </div>
        </div>
        <div>
          <div>
            - She travels with the group. She writes a travel blog and posts it
            on the app every day.
          </div>
          <div>
            - After the trip, Kiki makes many “travel friends”. They follow each
            others’ Tura account to keep on connecting.
          </div>
          <div>
            - Next week, there is another holiday, Kiki and her “new-made travel
            friends”, Susie, are planning to travel together and schedule a trip
            themselves.
          </div>
          <div>
            - Kiki uses the schedule function of the app to create a new trip
            schedule and share that with Susie to work together.
          </div>
          <div>
            - After finish the whole schedule and name it, Kiki publishes the
            schedule to find more travel buddies.
          </div>
        </div>
      </LegacyEqualSplit>
      <LegacySpacing size="large" />

      <LegacySubtitle title="Journey Map" />
      <LegacyDisplayImage
        source={{ frames: [{ src: JourneyMap }], height: 603, width: 1920 }}
        alt="Journey Map"
        xSpacing
      />

      <LegacySubtitle title="Blob Scenario" />
      <LegacyStaticDisplayImage
        src={Scenario}
        width={1920}
        height={914}
        alt="Blob Scenario"
        xSpacing
      />

      {/* Wireframe */}
      <LegacyTitle title="Wireframe" />
      <LegacySubtitle title="3 Purposes to open the app" />
      <div className="w-single gap-spacing grid grid-cols-1 md:grid-cols-3">
        <div>
          <LegacyTextSection
            content={[
              {
                type: TextContentType.Subtitle,
                text: "First",
              },
            ].concat(
              createPlainContent([
                "1. Find people who have the same interests",
                "2. Chat with each other to get known with each other",
                "3. Schedule a trip",
              ]),
            )}
          ></LegacyTextSection>
        </div>
        <div>
          <LegacyTextSection
            content={[
              {
                type: TextContentType.Subtitle,
                text: "Second",
              },
            ].concat(
              createPlainContent([
                "1. Schedule a trip",
                "2. Find/share with friends to trip “with me”.",
              ]),
            )}
          ></LegacyTextSection>
        </div>
        <div>
          <LegacyTextSection
            content={[
              {
                type: TextContentType.Subtitle,
                text: "Third",
              },
            ].concat(
              createPlainContent([
                "1. Find a trip schedule/a group of people to join",
              ]),
            )}
          ></LegacyTextSection>
        </div>
      </div>
      <LegacySpacing size="large" />

      <LegacySubtitle title="Structure Map" />
      <LegacyStaticDisplayImage
        src={Structure}
        width={1920}
        height={897}
        alt="Structure Map"
      />

      <LegacySubtitle title="Wireframe" />
      <LegacyHorizontalScroll
        src={Wireframe}
        width={7680}
        height={745}
        alt="Wireframe"
        prompt="Scroll horizontally to see the whole wireframe!"
        xSize="3.5x"
        xSpacing
      />

      <LegacySubtitle title="Color Theme Ideation" />
      <LegacyStaticDisplayImage
        src={ColorTheme}
        width={1920}
        height={722}
        alt="Color theme"
      />

      <RichTextImage
        title=""
        image={Logo}
        width={960}
        height={960}
        content={[{ type: TextContentType.Subtitle, text: "Logo Refinement" }]}
      />

      {/* Final Solution */}
      <LegacyTitle title="Final Solution" />
      <LegacySubtitle title="Function and Scenario" />
      <LegacyLargeGallery
        rows={[
          { images: [{ frames: [{ src: Final1 }], height: 621, width: 1920 }] },
          { images: [{ frames: [{ src: Final2 }], height: 621, width: 1920 }] },
          { images: [{ frames: [{ src: Final3 }], height: 621, width: 1920 }] },
          { images: [{ frames: [{ src: Final4 }], height: 621, width: 1920 }] },
          { images: [{ frames: [{ src: Final5 }], height: 621, width: 1920 }] },
          { images: [{ frames: [{ src: Final6 }], height: 621, width: 1920 }] },
        ]}
        description="Function and Scenario"
      />

      <Button
        href="https://www.figma.com/proto/0rLcVTl8XUGg5y5N6hXPwm/TURA?page-id=194%3A0&node-id=194-4697&node-type=CANVAS&viewport=2523%2C569%2C0.23&t=4xP6Bbz95Hdpctgy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=194%3A4697"
        color="dark"
      >
        View hi-fi prototype on Figma
      </Button>
      <LegacySpacing size="large" />

      {/* Main Features */}
      <LegacyTitle title="Main Features" />

      <LegacySubtitle title="Instruction" />
      <LegacyStaticDisplayImage
        src={Feature1}
        width={1920}
        height={899}
        alt="Instruction"
        xSpacing
      />

      <LegacySubtitle title="Log In" />
      <LegacyStaticDisplayImage
        src={Feature2}
        width={1920}
        height={899}
        alt="Log In"
        xSpacing
      />

      <LegacySubtitle title="Travel Schedule" />
      <LegacyStaticDisplayImage
        src={Feature3}
        width={1920}
        height={899}
        alt="Travel Schedule"
        xSpacing
      />

      <LegacySubtitle title="Create Community" />
      <LegacyStaticDisplayImage
        src={Feature4}
        width={1920}
        height={899}
        alt="Create Community"
        xSpacing
      />

      <LegacySubtitle title="Self-scheduled Plan" />
      <LegacyStaticDisplayImage
        src={Feature5}
        width={1920}
        height={899}
        alt="Self-scheduled Plan"
        xSpacing
      />

      <LegacySubtitle title="Homepage" />
      <LegacyStaticDisplayImage
        src={Feature6}
        width={1920}
        height={899}
        alt="Homepage"
        xSpacing
      />
      {props.children}
    </>
  );
}
