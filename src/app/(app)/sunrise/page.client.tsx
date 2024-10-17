"use client";

import { PropsWithChildren, ReactNode } from "react";

import Carousel from "@/components/Carousel";
import LargeGallery from "@/components/LargeGallery";
import SmallGallery from "@/components/SmallGallery";
import Spacing from "@/components/Spacing";
import DisplayImage from "@/sections/DisplayImage";
import HorizontalGallery from "@/sections/HorizontalGallery";
import TextImage from "@/sections/TextImage";
import LegacyTitle, { LegacySubtitle } from "@/sections/LegacyTitle";

import Evo1 from "@/images/sunrise/evolution/evolution-1-small.webp";
import Evo2 from "@/images/sunrise/evolution/evolution-2-small.webp";
import Evo3 from "@/images/sunrise/evolution/evolution-3-small.webp";
import Evo4 from "@/images/sunrise/evolution/evolution-4-small.webp";
import Explode from "@/images/sunrise/explode-full.webp";
import Gallery1 from "@/images/sunrise/gallery/gallery-1-full.webp";
import Gallery2 from "@/images/sunrise/gallery/gallery-2-half.webp";
import Gallery3 from "@/images/sunrise/gallery/gallery-3-half.webp";
import Gallery4 from "@/images/sunrise/gallery/gallery-4-full.webp";
import Gallery5 from "@/images/sunrise/gallery/gallery-5-full.webp";
import Gallery6 from "@/images/sunrise/gallery/gallery-6-full.webp";
import Gallery7 from "@/images/sunrise/gallery/gallery-7-full.webp";
import Ideation from "@/images/sunrise/ideation-full.webp";
import Making1 from "@/images/sunrise/making/making-01-small.webp";
import Making2 from "@/images/sunrise/making/making-02-small.webp";
import Making3 from "@/images/sunrise/making/making-03-small.webp";
import Making4 from "@/images/sunrise/making/making-04-small.webp";
import Making5 from "@/images/sunrise/making/making-05-small.webp";
import Making6 from "@/images/sunrise/making/making-06-small.webp";
import Making7 from "@/images/sunrise/making/making-07-small.webp";
import Making8 from "@/images/sunrise/making/making-08-small.webp";
import Making9 from "@/images/sunrise/making/making-09-small.webp";
import Making10 from "@/images/sunrise/making/making-10-small.webp";
import Making11 from "@/images/sunrise/making/making-11-small.webp";
import Making12 from "@/images/sunrise/making/making-12-small.webp";
import Making13 from "@/images/sunrise/making/making-13-small.webp";
import Making14 from "@/images/sunrise/making/making-14-small.webp";
import Making15 from "@/images/sunrise/making/making-15-small.webp";
import Manifesto from "@/images/sunrise/manifesto-half.webp";
import Detail1 from "@/images/sunrise/moodboard/detail-inspiration-1-small.webp";
import Detail2 from "@/images/sunrise/moodboard/detail-inspiration-2-small.webp";
import Detail3 from "@/images/sunrise/moodboard/detail-inspiration-3-small.webp";
import Form1 from "@/images/sunrise/moodboard/form-inspiration-1-small.webp";
import Form2 from "@/images/sunrise/moodboard/form-inspiration-2-small.webp";
import Form3 from "@/images/sunrise/moodboard/form-inspiration-3-small.webp";
import Ortho1 from "@/images/sunrise/ortho/ortho-1-full.webp";
import Ortho2 from "@/images/sunrise/ortho/ortho-2-full.webp";
import Ortho3 from "@/images/sunrise/ortho/ortho-3-full.webp";
import Ortho4 from "@/images/sunrise/ortho/ortho-4-full.webp";
import Ortho5 from "@/images/sunrise/ortho/ortho-5-full.webp";
import UsageScenario from "@/images/sunrise/usage-scenario-full.webp";

interface SunriseProps {
  topChildren: ReactNode;
}

export default function SunriseClient(props: PropsWithChildren<SunriseProps>) {
  return (
    <>
      {props.topChildren}

      {/* Manifesto */}
      <TextImage
        title="Project Manifesto"
        content={[
          "Sunrise speaker is a professional-grade speaker ideal for both indoor and outdoor use. The speaker, shining against the rising sun, complements the peaceful and reflective lifestyle of its users.",
        ]}
        image={Manifesto}
        width={960}
        height={1153}
      />

      {/* Usage Scenario */}
      <LegacyTitle title="Usage Scenario" />
      <LegacySubtitle title="Balcony" />
      <DisplayImage
        source={{ frames: [{ src: UsageScenario }], width: 1920, height: 961 }}
        alt="Usage scenario setting"
        xSpacing={true}
      />

      {/* Moodboard */}
      <LegacyTitle title="Moodboard" />
      <LegacySubtitle title="Balcony Speaker Form Inspiration " />
      <HorizontalGallery
        items={[
          { image: Form1, title: "Slope" },
          { image: Form2, title: "Segmented" },
          { image: Form3, title: "Round" },
        ]}
        width={640}
        height={866}
        botSpacing={false}
        titleClass="paragraph"
      />
      <LegacySubtitle title="Balcony Speaker Details Inspiration " />
      <HorizontalGallery
        items={[
          { image: Detail1, title: "Chamfer" },
          { image: Detail2, title: "Rope Wrapping" },
          { image: Detail3, title: "Transparent" },
        ]}
        width={640}
        height={560}
        titleClass="paragraph"
      />

      <div className="flex w-full flex-col items-center bg-[#212121]">
        <Spacing size="medium" />
        {/* Ideation */}
        <LegacyTitle title="Ideation" textColor="text-white" />
        <DisplayImage
          source={{ frames: [{ src: Ideation }], width: 1920, height: 961 }}
          alt="Ideation"
          xSpacing={true}
        />

        {/* Model Evolution*/}
        <LegacyTitle title="Model Evolution" textColor="text-white" />
        <HorizontalGallery
          items={[
            { image: Evo1, title: "Model Evolution" },
            { image: Evo2, title: "Model Evolution" },
            { image: Evo3, title: "Model Evolution" },
            { image: Evo4, title: "Model Evolution" },
          ]}
          width={640}
          height={543}
          textColor="text-white"
        />

        {/* Ortho Drawing */}
        <LegacyTitle title="Final Product Ortho Drawing" textColor="text-white" />
        <Carousel
          images={[Ortho1, Ortho2, Ortho3, Ortho4, Ortho5]}
          description="Ortho drawing"
          height={960}
          width={1920}
          textColor="text-white"
        />

        {/* Explode */}
        <LegacyTitle title="Exploded View" textColor="text-white" />
        <div className="single px-32">
          <DisplayImage
            source={{ frames: [{ src: Explode }], width: 1920, height: 2149 }}
            alt="Exploded view"
            xSpacing={false}
          />
        </div>

        {/* Making */}
        <LegacyTitle title="Final model making Process" textColor="text-white" />
        <SmallGallery
          items={[
            { image: Making1, title: "20lb Foam Route Template" },
            { image: Making2, title: "Foam Frame and Stander Making" },
            { image: Making3, title: "Bondo" },
            { image: Making4, title: "Spraying Primer" },
            { image: Making5, title: "Broken Repair & Bondo Sanding" },
            { image: Making6, title: "Color Paint and Clear Coat" },
            { image: Making7, title: "Sanding - 800 Grid" },
            { image: Making8, title: "Matte Paint" },
            { image: Making9, title: "Wire Soldering" },
            { image: Making10, title: "Inside Structure Making" },
            { image: Making11, title: "Chamfer Making" },
            { image: Making12, title: "Acrylic Spray Paint" },
            { image: Making13, title: "Foam Taping for Sealing" },
            { image: Making14, title: "Buttons Making" },
            { image: Making15, title: "Mounting up All Parts" },
          ]}
          width={640}
          height={470}
          textColor="text-white"
        />
      </div>

      <Spacing size="medium" />
      {/* Gallery */}
      <LegacyTitle title="Product Gallery" />

      <LegacySubtitle title="Outdoor" />
      <LargeGallery
        rows={[
          {
            images: [
              { frames: [{ src: Gallery1 }], width: 1920, height: 1279 },
            ],
          },
          {
            images: [
              { frames: [{ src: Gallery2 }], width: 960, height: 1347 },
              { frames: [{ src: Gallery3 }], width: 960, height: 1347 },
            ],
          },
          {
            images: [
              { frames: [{ src: Gallery4 }], width: 1920, height: 1279 },
            ],
          },
        ]}
        description="Outdoor gallery"
        botSpacing={false}
      />
      <LegacySubtitle title="Indoor" />
      <LargeGallery
        rows={[
          {
            images: [
              { frames: [{ src: Gallery5 }], width: 1920, height: 1279 },
            ],
          },
          {
            images: [
              { frames: [{ src: Gallery6 }], width: 1920, height: 1279 },
            ],
          },
          {
            images: [
              { frames: [{ src: Gallery7 }], width: 1920, height: 1279 },
            ],
          },
        ]}
        description="Indoor gallery"
      />

      {props.children}
    </>
  );
}
