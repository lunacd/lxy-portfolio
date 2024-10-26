"use client";

import { PropsWithChildren, ReactNode } from "react";

import { GalleryRowLayout } from "@/components/GalleryRow";
import HorizontalScroll from "@/components/HorizontalScroll";
import LargeGallery from "@/components/LargeGallery";
import SmallGallery from "@/components/SmallGallery";
import Spacing from "@/components/Spacing";
import DisplayImage from "@/sections/DisplayImage";
import LegacyHorizontalGallery from "@/sections/LegacyHorizontalGallery";
import LegacyTitle, { LegacySubtitle } from "@/sections/LegacyTitle";
import LegacyTextImage from "@/sections/LegacyTextImage";

import Belonging1 from "@/images/skates/belonging-1-small.webp";
import Belonging2 from "@/images/skates/belonging-2-small.webp";
import Belonging3 from "@/images/skates/belonging-3-small.webp";
import Belonging4 from "@/images/skates/belonging-4-small.webp";
import Colorways from "@/images/skates/colorways-full.webp";
import ConceptDevelopment from "@/images/skates/concept-dev-2x.webp";
import Details from "@/images/skates/details-half.webp";
import Environment1 from "@/images/skates/environment-1-full.webp";
import Environment2 from "@/images/skates/environment-2-full.webp";
import FlexibleWork from "@/images/skates/flexible-work-half.webp";
import Gallery1 from "@/images/skates/gallery/gallery-1-half.webp";
import Gallery2 from "@/images/skates/gallery/gallery-2-half.webp";
import Gallery3 from "@/images/skates/gallery/gallery-3-big.webp";
import Gallery4 from "@/images/skates/gallery/gallery-4-half.webp";
import Gallery5 from "@/images/skates/gallery/gallery-5-half.webp";
import Gallery6 from "@/images/skates/gallery/gallery-6-half.webp";
import Making1 from "@/images/skates/making/making-1-small.webp";
import Making2 from "@/images/skates/making/making-2-small.webp";
import Making3 from "@/images/skates/making/making-3-small.webp";
import Making4 from "@/images/skates/making/making-4-small.webp";
import Making5 from "@/images/skates/making/making-5-small.webp";
import Making6 from "@/images/skates/making/making-6-small.webp";
import Making7 from "@/images/skates/making/making-7-small.webp";
import Making8 from "@/images/skates/making/making-8-small.webp";
import Making9 from "@/images/skates/making/making-9-small.webp";
import Making10 from "@/images/skates/making/making-10-small.webp";
import Making11 from "@/images/skates/making/making-11-small.webp";
import Making12 from "@/images/skates/making/making-12-small.webp";
import Making13 from "@/images/skates/making/making-13-small.webp";
import Making14 from "@/images/skates/making/making-14-small.webp";
import Making15 from "@/images/skates/making/making-15-small.webp";
import Manifesto from "@/images/skates/manifesto-half.webp";
import Overview from "@/images/skates/overview-full.webp";
import Structure from "@/images/skates/structure-full.webp";
import TechDrawing from "@/images/skates/tech-drawing-full.webp";
import Usage from "@/images/skates/usage-desktop-full.webp";
import UsageM1 from "@/images/skates/usage-mobile-1-half.webp";
import UsageM2 from "@/images/skates/usage-mobile-2-half.webp";

interface SkatesProps {
  topChildren: ReactNode;
}

export default function SkatesClient(props: PropsWithChildren<SkatesProps>) {
  return (
    <>
      {props.topChildren}

      <LegacyTextImage
        title="Project Manifesto"
        content={[
          "A versatile chair designed for shared open spaces. “Skates” refers to its special affordances to dance around different needs and environments. It has two elegant “skating blades” and a multipurpose surface. It is designed to be casually shared, easily moved, and artfully arranged into any ad-hoc working space.",
        ]}
        image={Manifesto}
        width={960}
        height={620}
      />

      <LegacyTitle title="Overview" />
      <DisplayImage
        source={{ frames: [{ src: Overview }], width: 1920, height: 1163 }}
        alt="Overview"
        xSpacing
      />

      <LegacyTextImage
        title="Design Details"
        content={[
          "- Light color for casual vibe",
          "- Satin white leg for a mobile visual",
          "- Stitching with vibrant contrast",
        ]}
        image={Details}
        width={960}
        height={1062}
      />

      <LegacyTitle title="Different Usages" />
      <LegacySubtitle title="Normal chair, arm chair, chair with desktop, stool" />
      <div className="hidden md:block">
        <DisplayImage
          source={{ frames: [{ src: Usage }], width: 1920, height: 622 }}
          alt="Usages"
        />
      </div>
      <div className="md:hidden">
        <DisplayImage
          source={{ frames: [{ src: UsageM1 }], width: 6535, height: 4474 }}
          alt="Usage 1"
          botSpacing={false}
        />
        <DisplayImage
          source={{ frames: [{ src: UsageM2 }], width: 6535, height: 4474 }}
          alt="Usage 2"
        />
      </div>

      <LegacyTitle title="Usage Environment" />
      <LegacySubtitle title="Open Offices" />
      <DisplayImage
        source={{ frames: [{ src: Environment1 }], width: 1920, height: 1079 }}
        alt="Open offices"
      />
      <LegacySubtitle title="Lobby" />
      <DisplayImage
        source={{ frames: [{ src: Environment2 }], width: 1920, height: 1079 }}
        alt="Lobby"
      />

      <LegacyTitle title="Colorways" />
      <DisplayImage
        source={{ frames: [{ src: Colorways }], width: 1920, height: 1078 }}
        alt="Colorways"
      />

      <LegacyTitle title="Design Process" />
      <LegacyTextImage
        image={FlexibleWork}
        width={960}
        height={1022}
        title="Research about Flexible Work"
        content={[
          "- 74% of U.S. companies are using or plan to implement a hybrid work model.",
          "- Major companies were moving their workforce into coworking spaces.",
          "- Multipurpose workspaces can be adapted to meet the different specific needs that arise today.",
        ]}
        titleClass="subtitle"
      />
      <LegacySubtitle title="Create a Sense of Belonging" />
      <LegacyHorizontalGallery
        items={[
          { image: Belonging1, title: "Interactive" },
          { image: Belonging2, title: "Comfortable" },
          { image: Belonging3, title: "Welcoming" },
          { image: Belonging4, title: "Enjoyable" },
        ]}
        width={640}
        height={529}
        titleClass="paragraph"
      />

      <LegacyTitle title="Concept Development" />
      <HorizontalScroll
        src={ConceptDevelopment}
        width={3840}
        height={836}
        alt="Concept development"
        xSzie="2x"
        prompt="Scroll horizontally to see the full process!"
      />

      <LegacyTitle title="Final Tech Drawing" />
      <DisplayImage
        source={{ frames: [{ src: TechDrawing }], width: 1920, height: 750 }}
        alt="Tech drawing"
        xSpacing
      />

      <LegacyTitle title="Final Structure" />
      <DisplayImage
        source={{ frames: [{ src: Structure }], width: 1920, height: 1490 }}
        alt="Structure"
        xSpacing
      />

      <LegacyTitle title="Model Making" />
      <SmallGallery
        items={[
          { image: Making1, title: "Water Jet Cutting" },
          { image: Making2, title: "Steel Tube Bending and Welding" },
          { image: Making3, title: "Steel Sanding" },
          { image: Making4, title: "Holes and Chamfer Making" },
          { image: Making5, title: "Preparing J-Panel" },
          { image: Making6, title: "J-Panel Cutting" },
          { image: Making7, title: "Plywood Gluing" },
          { image: Making8, title: "Screwing on Steel Support Sheets" },
          { image: Making9, title: "Lining up Screw Holes" },
          { image: Making10, title: "Installing T-nuts" },
          { image: Making11, title: "Selecting Foams" },
          { image: Making12, title: "Stitching Upholstery" },
          { image: Making13, title: "Powder Coating" },
          { image: Making14, title: "Installing Glides under Tubes" },
          { image: Making15, title: "Assembly" },
        ]}
        width={640}
        height={470}
      />

      <LegacyTitle title="Gallery" />
      <LargeGallery
        description="Skates Gallery"
        rows={[
          {
            images: [
              { frames: [{ src: Gallery1 }], width: 960, height: 1153 },
              { frames: [{ src: Gallery2 }], width: 960, height: 1438 },
            ],
            layout: GalleryRowLayout.EqualWidthEnd,
          },
          {
            images: [
              { frames: [{ src: Gallery3 }], width: 1280, height: 825 },
              { frames: [{ src: Gallery4 }], width: 960, height: 1377 },
            ],
          },
          {
            images: [
              { frames: [{ src: Gallery5 }], width: 960, height: 1438 },
              { frames: [{ src: Gallery6 }], width: 960, height: 1153 },
            ],
            layout: GalleryRowLayout.EqualWidthStart,
          },
        ]}
        botSpacing={false}
      />

      <div className="text-center text-xs">
        * This project is sponsored by Bernhardt Design.
      </div>
      <Spacing size="medium" />
      {props.children}
    </>
  );
}
