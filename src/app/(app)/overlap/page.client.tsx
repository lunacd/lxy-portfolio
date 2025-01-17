"use client";

import { PropsWithChildren, ReactNode } from "react";
import ImageText from "src/blocks/ImageText";

import Carousel from "@/components/Carousel";
import DisplayImage from "@/components/LegacyDisplayImage";
import LegacyHorizontalGallery from "@/components/LegacyHorizontalGallery";
import LegacyLargeGallery from "@/components/LegacyLargeGallery";
import LegacySmallGallery from "@/components/LegacySmallGallery";
import LegacyTextImage from "@/components/LegacyTextImage";
import LegacyTitle, { LegacySubtitle } from "@/components/LegacyTitle";
import Spacing from "@/components/Spacing";
import { createPlainContent } from "@/components/TextSection";
import useFrameIndex from "@/utils/useFrameIndex";

import Benchmark from "@/images/overlap/benchmark-full.webp";
import CMF1 from "@/images/overlap/cmf/cmf-1-full.webp";
import CMF2 from "@/images/overlap/cmf/cmf-2-full.webp";
import CMF3 from "@/images/overlap/cmf/cmf-3-full.webp";
import CMF4 from "@/images/overlap/cmf/cmf-4-full.webp";
import CMF5 from "@/images/overlap/cmf/cmf-5-full.webp";
import CMF6 from "@/images/overlap/cmf/cmf-6-full.webp";
import CMF7 from "@/images/overlap/cmf/cmf-7-full.webp";
import CMF8 from "@/images/overlap/cmf/cmf-8-full.webp";
import DNA1 from "@/images/overlap/dna/dna-1-small.webp";
import DNA2 from "@/images/overlap/dna/dna-2-small.webp";
import DNA3 from "@/images/overlap/dna/dna-3-small.webp";
import DNA4 from "@/images/overlap/dna/dna-4-small.webp";
import DNA5 from "@/images/overlap/dna/dna-5-small.webp";
import FileSorterImage from "@/images/overlap/file-sorter-half.webp";
import FileSorterUseImage1 from "@/images/overlap/file-sorter-use-1-big.webp";
import FileSorterUseImage21 from "@/images/overlap/file-sorter-use-2-1-big.webp";
import FileSorterUseImage22 from "@/images/overlap/file-sorter-use-2-2-big.webp";
import FileSorterUseImage23 from "@/images/overlap/file-sorter-use-2-3-big.webp";
import Gallery2 from "@/images/overlap/gallery/gallery-2-half.webp";
import Gallery3 from "@/images/overlap/gallery/gallery-3-half.webp";
import Gallery4 from "@/images/overlap/gallery/gallery-4-half.webp";
import Gallery5 from "@/images/overlap/gallery/gallery-5-full.webp";
import Gallery6 from "@/images/overlap/gallery/gallery-6-full.webp";
import Ideation from "@/images/overlap/ideation-full.webp";
import ManifestoImage from "@/images/overlap/manifesto-half.webp";
import Overlay1 from "@/images/overlap/overlay-1-full.webp";
import Overlay2 from "@/images/overlap/overlay-2-full.webp";
import Overlay3 from "@/images/overlap/overlay-3-full.webp";
import Process1 from "@/images/overlap/process/process-01-small.webp";
import Process2 from "@/images/overlap/process/process-02-small.webp";
import Process3 from "@/images/overlap/process/process-03-small.webp";
import Process4 from "@/images/overlap/process/process-04-small.webp";
import Process5 from "@/images/overlap/process/process-05-small.webp";
import Process6 from "@/images/overlap/process/process-06-small.webp";
import Process7 from "@/images/overlap/process/process-07-small.webp";
import Process8 from "@/images/overlap/process/process-08-small.webp";
import Process9 from "@/images/overlap/process/process-09-small.webp";
import Process10 from "@/images/overlap/process/process-10-small.webp";
import Process11 from "@/images/overlap/process/process-11-small.webp";
import Process12 from "@/images/overlap/process/process-12-small.webp";
import Prototype from "@/images/overlap/prototype-full.webp";
import Set1 from "@/images/overlap/set-1-half.webp";
import Set2 from "@/images/overlap/set-2-half.webp";
import Set3 from "@/images/overlap/set-3-half.webp";
import TechDrawing1 from "@/images/overlap/tech-drawing/tech-drawing-01-full.webp";
import TechDrawing2 from "@/images/overlap/tech-drawing/tech-drawing-02-full.webp";
import TechDrawing3 from "@/images/overlap/tech-drawing/tech-drawing-03-full.webp";
import TechDrawing4 from "@/images/overlap/tech-drawing/tech-drawing-04-full.webp";
import TechDrawing5 from "@/images/overlap/tech-drawing/tech-drawing-05-full.webp";
import TechDrawing6 from "@/images/overlap/tech-drawing/tech-drawing-06-full.webp";
import TechDrawing7 from "@/images/overlap/tech-drawing/tech-drawing-07-full.webp";
import TechDrawing8 from "@/images/overlap/tech-drawing/tech-drawing-08-full.webp";
import TechDrawing9 from "@/images/overlap/tech-drawing/tech-drawing-09-full.webp";
import TechDrawing10 from "@/images/overlap/tech-drawing/tech-drawing-10-full.webp";
import TechDrawing11 from "@/images/overlap/tech-drawing/tech-drawing-11-full.webp";
import TimerImage from "@/images/overlap/timer-half.webp";
import TimerUseImage from "@/images/overlap/timer-use-big.webp";
import TrayImage from "@/images/overlap/tray-half.webp";
import TrayUseImage1 from "@/images/overlap/tray-use-1-big.webp";
import TrayUseImage2 from "@/images/overlap/tray-use-2-big.webp";

interface OverlapProps {
  topChildren: ReactNode;
}

export default function OverlapClient(props: PropsWithChildren<OverlapProps>) {
  const currentIndex = useFrameIndex(2000);

  return (
    <>
      {props.topChildren}

      {/* Manifesto */}
      <LegacyTextImage
        title="Project Manifesto"
        content={[
          "A collection of office accessories that provides an intuitive concept of category to help users better organize their time, space, and objects.",
        ]}
        image={ManifestoImage}
        width={6240}
        height={4160}
      />

      {/* Overlap */}
      <LegacyTitle title="Overlap Set" />
      <LegacyHorizontalGallery
        items={[
          {
            image: Set1,
            title: "Timer",
            content: createPlainContent(["Section Time"]),
          },
          {
            image: Set2,
            title: "File Sorter",
            content: createPlainContent(["Categorize files, books, etc."]),
          },
          {
            image: Set3,
            title: "Tray",
            content: createPlainContent(["Store pens, pins, etc."]),
          },
        ]}
        sparse={true}
        width={1084}
        height={1084}
      />
      <LegacyTitle title="Moodboard: Time, Space, Organizing" />
      <DisplayImage
        source={{ frames: [{ src: Overlay1 }], width: 9534, height: 3742 }}
        alt="Overlapped moodboard"
        overlayTitle="Overlapped"
        overlayText="Time and space sometimes overlap."
        xSpacing={true}
      />
      <DisplayImage
        source={{ frames: [{ src: Overlay2 }], width: 9534, height: 3742 }}
        alt="Overlapped moodboard"
        overlayTitle="Changeable"
        overlayText="Time changes are unnoticeable, so objects' movements and changes are used to track time passing."
        xSpacing={true}
      />
      <DisplayImage
        source={{ frames: [{ src: Overlay3 }], width: 9534, height: 3742 }}
        alt="Overlapped moodboard"
        overlayTitle="Joyful"
        overlayText="Categorizing can be a joyful thing!"
        xSpacing={true}
      />

      {/* Timer */}
      <LegacyTextImage
        title="Timer"
        content={[
          "Overlapped part = Set up time",
          "1 Slice = 10 min",
          "Total: 1 hour",
        ]}
        image={TimerImage}
        height={4125}
        width={4684}
      />
      <ImageText
        alt="Timer usage"
        content={["Set a Timer"]}
        source={{ frames: [{ src: TimerUseImage }], width: 6400, height: 4517 }}
      />

      {/* File Sorter */}
      <LegacyTextImage
        title="File Sorter"
        content={[
          "Four different translucent colored blockers categorize files with height and color.",
        ]}
        image={FileSorterImage}
        width={4162}
        height={4125}
      />
      <ImageText
        alt="File sorter usage 1"
        content={["Put in file"]}
        source={{
          frames: [{ src: FileSorterUseImage1 }],
          width: 6300,
          height: 4500,
        }}
      />
      <ImageText
        alt="File sorter usage 2"
        content={["Different Overlapping Order"]}
        source={{
          frames: [
            { src: FileSorterUseImage21 },
            { src: FileSorterUseImage22 },
            { src: FileSorterUseImage23 },
          ],
          width: 6300,
          height: 5387,
        }}
        frame={currentIndex}
      />

      {/* Tray */}
      <LegacyTextImage
        title="Tray"
        content={[
          "Four different colors, size, and depth trays to categorize office accessories",
        ]}
        image={TrayImage}
        width={4684}
        height={4125}
      />
      <ImageText
        alt="Tray usage 1"
        content={["Different combinations"]}
        source={{ frames: [{ src: TrayUseImage1 }], width: 6300, height: 4500 }}
      />
      <ImageText
        alt="Tray usage 2"
        content={["Different usage"]}
        source={{ frames: [{ src: TrayUseImage2 }], width: 6296, height: 4500 }}
      />

      {/* Tech Drawing */}
      <LegacyTitle title="Tech Drawing" />
      <Carousel
        images={[
          TechDrawing1,
          TechDrawing2,
          TechDrawing3,
          TechDrawing4,
          TechDrawing5,
          TechDrawing6,
          TechDrawing7,
          TechDrawing8,
          TechDrawing9,
          TechDrawing10,
          TechDrawing11,
        ]}
        description="Tech Drawing"
        width={8000}
        height={4500}
      />

      {/* Design Process */}
      <LegacyTitle title="Design Process" />
      <LegacySubtitle title="HAY's Brand DNA Analysis" />
      <LegacyHorizontalGallery
        items={[
          { image: DNA1, title: "Playful" },
          { image: DNA2, title: "Accessible" },
          { image: DNA3, title: "Adaptive" },
          { image: DNA4, title: "Contemporary" },
          { image: DNA5, title: "Vibrant" },
        ]}
        sparse={false}
        width={926}
        height={1321}
        titleClass="paragraph"
      />

      {/* Brand Benchmark */}
      <LegacySubtitle title="HAY's Brand Benchmarks" />
      <DisplayImage
        source={{ frames: [{ src: Benchmark }], width: 4784, height: 2735 }}
        alt="Brand benchmark"
        xSpacing
      />

      {/* Ideation */}
      <LegacySubtitle title="Overlap Ideation" />
      <DisplayImage
        source={{ frames: [{ src: Ideation }], width: 8000, height: 4500 }}
        alt="Ideation for Overlap"
      />

      {/* Prototype */}
      <LegacySubtitle title="Prototype &amp; Form Perfection" />
      <DisplayImage
        source={{ frames: [{ src: Prototype }], width: 7677, height: 4163 }}
        alt="Prototype for Overlap"
      />

      {/* CMF & Manufacturing */}
      <LegacyTitle title="CMF &amp; Manufacturing" />
      <Carousel
        images={[CMF1, CMF2, CMF3, CMF4, CMF5, CMF6, CMF7, CMF8]}
        description="CMF"
        width={8000}
        height={4500}
      />

      {/* Making Process */}
      <LegacyTitle title="Final Model Making Process" />
      <LegacySmallGallery
        items={[
          { image: Process1, title: "Wood Cut" },
          { image: Process2, title: "Wood Flatten" },
          { image: Process3, title: "CNC" },
          { image: Process4, title: "Laser Cut" },
          { image: Process5, title: "Band Saw Cut" },
          { image: Process6, title: "Machine Sanding" },
          { image: Process7, title: "Hand Sanding" },
          { image: Process8, title: "Router Chamfer" },
          { image: Process9, title: "Wood Stain" },
          { image: Process10, title: "Acrylic Gluing" },
          { image: Process11, title: "Clear Matte Finish Spray" },
          { image: Process12, title: "Assembly" },
        ]}
        width={3063}
        height={2248}
      />

      {/* Gallery */}
      <LegacyTitle title="Product Gallery" />
      <LegacyLargeGallery
        rows={[
          {
            images: [
              { frames: [{ src: Gallery2 }], width: 960, height: 769 },
              { frames: [{ src: Gallery3 }], width: 960, height: 769 },
              { frames: [{ src: Gallery4 }], width: 960, height: 1537 },
            ],
          },
          {
            images: [
              { frames: [{ src: Gallery5 }], width: 12767, height: 7167 },
            ],
          },
          {
            images: [
              { frames: [{ src: Gallery6 }], width: 12767, height: 7125 },
            ],
          },
        ]}
        description="Overlap"
        botSpacing={false}
      />

      <div className="text-center text-xs">
        This is not a product of Hay. Branding and logo marks are used for
        demonstration purposes only.
      </div>
      <Spacing size="medium" />

      {props.children}
    </>
  );
}
