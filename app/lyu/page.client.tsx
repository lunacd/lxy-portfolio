"use client";

import Carousel from "@/components/Carousel";
import DisplayImage from "@/components/DisplayImage";
import { GalleryRowLayout } from "@/components/GalleryRow";
import HorizontalGallery from "@/components/HorizontalGallery";
import LargeGallery from "@/components/LargeGallery";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import SmallGallery from "@/components/SmallGallery";
import Subtitle from "@/components/Subtitle";
import TextImage from "@/components/TextImage";
import Title from "@/components/Title";
import TopDisplay from "@/components/TopDisplay";
import { projectsData } from "@/utils/projectData";
import useScroll from "@/utils/useScroll";

import BagMaking1 from "@/images/lyu/bag-making/bag-making-1-small.webp";
import BagMaking2 from "@/images/lyu/bag-making/bag-making-2-small.webp";
import BagMaking3 from "@/images/lyu/bag-making/bag-making-3-small.webp";
import BagMaking4 from "@/images/lyu/bag-making/bag-making-4-small.webp";
import BagMaking5 from "@/images/lyu/bag-making/bag-making-5-small.webp";
import BagMaking6 from "@/images/lyu/bag-making/bag-making-6-small.webp";
import BagMaking7 from "@/images/lyu/bag-making/bag-making-7-small.webp";
import BagMaking8 from "@/images/lyu/bag-making/bag-making-8-small.webp";
import BagMaking9 from "@/images/lyu/bag-making/bag-making-9-small.webp";
import Ease1 from "@/images/lyu/ease-1-half.webp";
import Ease2 from "@/images/lyu/ease-2-half.webp";
import Ease3 from "@/images/lyu/ease-3-half.webp";
import Gallery11 from "@/images/lyu/gallery/gallery-1-1-half.webp";
import Gallery12 from "@/images/lyu/gallery/gallery-1-2-half.webp";
import Gallery13 from "@/images/lyu/gallery/gallery-1-3-half.webp";
import Gallery21 from "@/images/lyu/gallery/gallery-2-1-half.webp";
import Gallery22 from "@/images/lyu/gallery/gallery-2-2-half.webp";
import Gallery23 from "@/images/lyu/gallery/gallery-2-3-half.webp";
import Gallery31 from "@/images/lyu/gallery/gallery-3-1-big.webp";
import Gallery32 from "@/images/lyu/gallery/gallery-3-2-big.webp";
import Gallery41 from "@/images/lyu/gallery/gallery-4-1-half.webp";
import Gallery42 from "@/images/lyu/gallery/gallery-4-2-half.webp";
import Gallery43 from "@/images/lyu/gallery/gallery-4-3-half.webp";
import Gallery51 from "@/images/lyu/gallery/gallery-5-1-half.webp";
import Gallery52 from "@/images/lyu/gallery/gallery-5-2-half.webp";
import Gallery53 from "@/images/lyu/gallery/gallery-5-3-half.webp";
import Gallery61 from "@/images/lyu/gallery/gallery-6-1-big.webp";
import Gallery62 from "@/images/lyu/gallery/gallery-6-2-big.webp";
import Gallery63 from "@/images/lyu/gallery/gallery-6-3-big.webp";
import Gallery71 from "@/images/lyu/gallery/gallery-7-1-half.webp";
import Gallery72 from "@/images/lyu/gallery/gallery-7-2-half.webp";
import Gallery73 from "@/images/lyu/gallery/gallery-7-3-half.webp";
import Gallery81 from "@/images/lyu/gallery/gallery-8-1-half.webp";
import Gallery82 from "@/images/lyu/gallery/gallery-8-2-half.webp";
import Gallery83 from "@/images/lyu/gallery/gallery-8-3-half.webp";
import IdeationSlipper from "@/images/lyu/ideation-slipper-full.webp";
import IdeationTote from "@/images/lyu/ideation-tote-full.webp";
import Joyful1 from "@/images/lyu/joyful-1-half.webp";
import Joyful2 from "@/images/lyu/joyful-2-half.webp";
import Joyful3 from "@/images/lyu/joyful-3-half.webp";
import ManifestoImage from "@/images/lyu/manifesto-half.webp";
import SlipperMaking1 from "@/images/lyu/slipper-making/slipper-making-01-small.webp";
import SlipperMaking2 from "@/images/lyu/slipper-making/slipper-making-02-small.webp";
import SlipperMaking3 from "@/images/lyu/slipper-making/slipper-making-03-small.webp";
import SlipperMaking4 from "@/images/lyu/slipper-making/slipper-making-04-small.webp";
import SlipperMaking5 from "@/images/lyu/slipper-making/slipper-making-05-small.webp";
import SlipperMaking6 from "@/images/lyu/slipper-making/slipper-making-06-small.webp";
import SlipperMaking7 from "@/images/lyu/slipper-making/slipper-making-07-small.webp";
import SlipperMaking8 from "@/images/lyu/slipper-making/slipper-making-08-small.webp";
import SlipperMaking9 from "@/images/lyu/slipper-making/slipper-making-09-small.webp";
import SlipperMaking10 from "@/images/lyu/slipper-making/slipper-making-10-small.webp";
import SlipperMaking11 from "@/images/lyu/slipper-making/slipper-making-11-small.webp";
import SlipperMaking12 from "@/images/lyu/slipper-making/slipper-making-12-small.webp";
import SlipperMaking13 from "@/images/lyu/slipper-making/slipper-making-13-small.webp";
import SlipperMaking14 from "@/images/lyu/slipper-making/slipper-making-14-small.webp";
import SlipperMaking15 from "@/images/lyu/slipper-making/slipper-making-15-small.webp";
import TechPack1 from "@/images/lyu/tech-pack/tech-pack-1-full.webp";
import TechPack2 from "@/images/lyu/tech-pack/tech-pack-2-full.webp";
import TechPack3 from "@/images/lyu/tech-pack/tech-pack-3-full.webp";
import TechPack4 from "@/images/lyu/tech-pack/tech-pack-4-full.webp";
import TechPack5 from "@/images/lyu/tech-pack/tech-pack-5-full.webp";
import TechPack6 from "@/images/lyu/tech-pack/tech-pack-6-full.webp";
import TechPack7 from "@/images/lyu/tech-pack/tech-pack-7-full.webp";

export default function LyuClient() {
  const scrollDiv = useScroll();

  return (
    <Scroller bgColor="bg-[#EFF2F3]" divRef={scrollDiv}>
      <TopDisplay
        project={projectsData["lyu"]}
        animation={false}
        displayDescriptionOnMobile={true}
      />

      {/* Manifesto */}
      <TextImage
        title="Project Manifesto"
        content={[
          "Design and make a leather, eccentric tote bag and shoes, to go with my artistic style.",
        ]}
        image={ManifestoImage}
        width={4684}
        height={5625}
      />

      {/* Personal Style */}
      <Title title="What is My Personal Style?" />
      <Subtitle subtitle="Ease" />
      <HorizontalGallery
        items={[
          { image: Ease1, title: "Style: Ease" },
          { image: Ease2, title: "Style: Ease" },
          { image: Ease3, title: "Style: Ease" },
        ]}
        sparse={false}
        botSpacing={false}
        width={960}
        height={1174}
      />
      <Subtitle subtitle="Joyful" />
      <HorizontalGallery
        items={[
          { image: Joyful1, title: "Style: Joyful" },
          { image: Joyful2, title: "Style: Joyful" },
          { image: Joyful3, title: "Style: Joyful" },
        ]}
        width={960}
        height={1174}
      />

      {/* Ideation */}
      <Title title="Ideation - Tote" />
      <DisplayImage
        source={{ frames: [{ src: IdeationTote }], width: 2400, height: 1053 }}
        alt="Ideation for the tote"
      />
      <Title title="Ideation - Slippers" />
      <DisplayImage
        source={{
          frames: [{ src: IdeationSlipper }],
          width: 5047,
          height: 2242,
        }}
        alt="Ideation for the slippers"
      />

      {/* Tote bag making process */}
      <Title title="Tote Bag Making Process" />
      <SmallGallery
        items={[
          { image: BagMaking1, title: "Cutting Template" },
          { image: BagMaking2, title: "Material Cutting" },
          { image: BagMaking3, title: "Buckle Selection" },
          { image: BagMaking4, title: "Thinning Leather" },
          { image: BagMaking5, title: "Glue Spray" },
          { image: BagMaking6, title: "Taping Pieces" },
          { image: BagMaking7, title: "Stitch Positioning" },
          { image: BagMaking8, title: "Flat Stitching" },
          { image: BagMaking9, title: "Cylinder Sewing" },
        ]}
        width={1534}
        height={1125}
      />

      {/* Slipper making process */}
      <Title title="Slippers Making Process" />
      <SmallGallery
        items={[
          { image: SlipperMaking1, title: "Taping Design" },
          { image: SlipperMaking2, title: "Cutting Material" },
          { image: SlipperMaking3, title: "Sticking Pieces Together" },
          { image: SlipperMaking4, title: "Heating up Lining" },
          { image: SlipperMaking5, title: "Stitching" },
          { image: SlipperMaking6, title: "Making Insole" },
          { image: SlipperMaking7, title: "Closing the Back" },
          { image: SlipperMaking8, title: "Gluing" },
          { image: SlipperMaking9, title: "Hammering and Nailing" },
          { image: SlipperMaking10, title: "Putting on Shoelaces" },
          { image: SlipperMaking11, title: "Sanding the Bottom" },
          { image: SlipperMaking12, title: "Applying Glue to Sole" },
          { image: SlipperMaking13, title: "Heating up the Glue" },
          { image: SlipperMaking14, title: "Pressing Sole" },
          { image: SlipperMaking15, title: "Removing Shoe Lasts" },
        ]}
        width={1534}
        height={1125}
      />

      {/* Tech Pack */}
      <Title title="Tech Pack" />
      <Carousel
        images={[
          TechPack1,
          TechPack2,
          TechPack3,
          TechPack4,
          TechPack5,
          TechPack6,
          TechPack7,
        ]}
        description="Tech Pack"
        width={6384}
        height={3584}
      />

      {/* Gallery */}
      <Title title="Project Gallery" />
      <LargeGallery
        rows={[
          {
            images: [
              {
                frames: [
                  { src: Gallery11 },
                  { src: Gallery12 },
                  { src: Gallery13 },
                ],
                width: 4694,
                height: 7017,
              },
              {
                frames: [
                  { src: Gallery21 },
                  { src: Gallery22 },
                  { src: Gallery23 },
                ],
                width: 4684,
                height: 5625,
              },
            ],
            layout: GalleryRowLayout.EqualWidthEnd,
          },
          {
            images: [
              {
                frames: [{ src: Gallery31 }, { src: Gallery32 }],
                width: 6467,
                height: 4159,
              },
              {
                frames: [
                  { src: Gallery41 },
                  { src: Gallery42 },
                  { src: Gallery43 },
                ],
                width: 2900,
                height: 4159,
              },
            ],
          },
          {
            images: [
              {
                frames: [
                  { src: Gallery51 },
                  { src: Gallery52 },
                  { src: Gallery53 },
                ],
                width: 2900,
                height: 4159,
              },
              {
                frames: [
                  { src: Gallery61 },
                  { src: Gallery62 },
                  { src: Gallery63 },
                ],
                width: 6467,
                height: 4159,
              },
            ],
          },
          {
            images: [
              {
                frames: [
                  { src: Gallery71 },
                  { src: Gallery72 },
                  { src: Gallery73 },
                ],
                width: 4694,
                height: 7017,
              },
              {
                frames: [
                  { src: Gallery81 },
                  { src: Gallery82 },
                  { src: Gallery83 },
                ],
                width: 4684,
                height: 5625,
              },
            ],
            layout: GalleryRowLayout.EqualWidthStart,
          },
        ]}
        description="Lyu"
      />

      <ProjectNavigation prev="/m-tron" />
    </Scroller>
  );
}
