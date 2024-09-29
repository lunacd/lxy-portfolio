"use client";

import HorizontalScroll from "@/components/HorizontalScroll";
import LargeGallery from "@/components/LargeGallery";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import Spacing from "@/components/Spacing";
import DisplayImage from "@/sections/DisplayImage";
import HorizontalGallery from "@/sections/HorizontalGallery";
import TextImage from "@/sections/TextImage";
import Title from "@/sections/Title";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";
import useFrameIndex from "@/utils/useFrameIndex";

import Brake1 from "@/images/m-tron/brake-1-full.webp";
import Brake2 from "@/images/m-tron/brake-2-full.webp";
import Charger1 from "@/images/m-tron/charger-1-full.webp";
import Charger2 from "@/images/m-tron/charger-2-full.webp";
import Details1 from "@/images/m-tron/details/details-1-half.webp";
import Details2 from "@/images/m-tron/details/details-2-half.webp";
import Details3 from "@/images/m-tron/details/details-3-full.webp";
import Details4 from "@/images/m-tron/details/details-4-full.webp";
import Gallery1 from "@/images/m-tron/gallery/gallery-1-full.webp";
import Gallery2 from "@/images/m-tron/gallery/gallery-2-full.webp";
import Gallery3 from "@/images/m-tron/gallery/gallery-3-full.webp";
import Height1 from "@/images/m-tron/height-1-full.webp";
import Height2 from "@/images/m-tron/height-2-full.webp";
import Ideation from "@/images/m-tron/ideation-full.webp";
import Inspiration from "@/images/m-tron/inspiration-half.webp";
import Manifesto from "@/images/m-tron/manifesto-half.webp";
import Moodboard1 from "@/images/m-tron/moodboard/futuristic-small.webp";
import Moodboard2 from "@/images/m-tron/moodboard/light-and-curve-small.webp";
import Moodboard3 from "@/images/m-tron/moodboard/surface-change-small.webp";
import UserScenario from "@/images/m-tron/scenario-6x.webp";
import SpeedController from "@/images/m-tron/speed-controller-full.webp";

export default function MTronClient() {
  const currentIndex = useFrameIndex(1500);
  return (
    <Scroller bgColor="bg-[#353535]">
      <TopDisplay
        project={projectsData["m-tron"]}
        displayDescriptionOnMobile={true}
      />

      {/* Project Manifesto */}
      <TextImage
        title="Project Manifesto"
        content={[
          "A shared semi-automatic scooter inside Walt Disney World for both kids and adult to transport between different rides.",
        ]}
        image={Manifesto}
        width={960}
        height={921}
        textColor="text-white"
      />

      {/* Inspiration */}
      <TextImage
        title="Inspiration: Shared Mobility"
        content={[
          "The target user of today's shared mobility is mainly adults. There is an exclusiveness of kids. Therefore, I design this shared semi-automatic scooter inside Walt Disney World for both kids and adult. ",
        ]}
        image={Inspiration}
        width={960}
        height={692}
        textColor="text-white"
      />

      {/* Moodboard */}
      <Title title="Moodboard" textColor="text-white" />
      <HorizontalGallery
        items={[
          { image: Moodboard1, title: "Futuristic" },
          { image: Moodboard2, title: "Light and Curve Line" },
          { image: Moodboard3, title: "Surface Change" },
        ]}
        width={640}
        height={431}
        textColor="text-white"
      />

      {/* Ideation */}
      <Title title="Ideation" textColor="text-white" />
      <DisplayImage
        source={{ frames: [{ src: Ideation }], width: 1920, height: 961 }}
        alt="Ideation"
      />

      {/* User Scenario */}
      <Title title="User Scenario" textColor="text-white" />
      <HorizontalScroll
        prompt="Scroll horizontally to see the whole scenario!"
        src={UserScenario}
        width={11520}
        height={1489}
        alt="User scenario"
        xSzie="3.5x"
        textColor="text-white"
      />

      {/* Features */}
      <Title title="Features" textColor="text-white" />
      <DisplayImage
        source={{
          frames: [{ src: SpeedController }],
          width: 1920,
          height: 961,
        }}
        alt="Speed controller"
        botSpacing={false}
        overlayTitle="Speed Controller"
        textPosition="right"
        textColor="text-white"
      />
      <DisplayImage
        source={{
          frames: [{ src: Brake1 }, { src: Brake2 }],
          width: 1920,
          height: 961,
        }}
        alt="Brake"
        frame={currentIndex}
        botSpacing={false}
        overlayTitle="Squeeze to Brake"
        textPosition="left"
        textColor="text-white"
      />
      <DisplayImage
        source={{
          frames: [{ src: Height1 }, { src: Height2 }],
          width: 1920,
          height: 961,
        }}
        alt="Different sizes"
        frame={currentIndex}
        botSpacing={false}
        overlayTitle="Different Height"
        textPosition="left"
        textColor="text-white"
      />
      <DisplayImage
        source={{
          frames: [{ src: Charger1 }, { src: Charger2 }],
          width: 1920,
          height: 961,
        }}
        alt="Charger"
        frame={currentIndex}
        botSpacing={false}
        overlayTitle="Charger"
        textPosition="right"
        textColor="text-white"
      />

      <div className="flex w-full flex-col items-center bg-[#E4F2F5]">
        <Spacing size="medium" />
        <Title title="Details Showcase" />
        <LargeGallery
          rows={[
            {
              images: [
                { frames: [{ src: Details1 }], width: 960, height: 765 },
                { frames: [{ src: Details2 }], width: 960, height: 765 },
              ],
            },
            {
              images: [
                { frames: [{ src: Details3 }], width: 1920, height: 1167 },
              ],
            },
            {
              images: [
                { frames: [{ src: Details4 }], width: 1920, height: 1167 },
              ],
            },
          ]}
          description="M-Tron details"
          botSpacing={false}
          xSpacing={true}
        />
        <Spacing size="medium" />
      </div>

      <Spacing size="medium" />

      <LargeGallery
        rows={[
          {
            images: [{ frames: [{ src: Gallery1 }], width: 1920, height: 961 }],
          },
          {
            images: [{ frames: [{ src: Gallery2 }], width: 1920, height: 961 }],
          },
          {
            images: [{ frames: [{ src: Gallery3 }], width: 1920, height: 961 }],
          },
        ]}
        description="M-Tron Gallery"
        botSpacing={false}
      />

      <div className="text-center text-xs text-white">
        * This is not an actual product of Disney. Branding and logo marks are
        used for demonstration purposes only as part of a student work.
      </div>
      <Spacing size="medium" />
      <ProjectNavigation prev="/sunrise" textColor="text-white" />
    </Scroller>
  );
}
