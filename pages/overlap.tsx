import { NextPage } from "next";
import Head from "next/head";

import Carousel from "../components/carousel";
import CenterImage from "../components/center-image";
import FullImage from "../components/full-image";
import HorizontalGallery from "../components/horizontal-gallery";
import ImageText from "../components/image-text";
import LargeGallery from "../components/large-gallery";
import OverlayImage from "../components/overlay-image";
import PageRoot from "../components/page-root";
import ProjectNavigation from "../components/project-navigation";
import Scroller from "../components/scroller";
import { Sidebar } from "../components/sidebar";
import SmallGallery from "../components/small-gallery";
import Spacing from "../components/spacing";
import Subtitle from "../components/subtitle";
import TextImage from "../components/text-image";
import Title from "../components/title";
import TopDisplay from "../components/top-display";
import GalleryItem from "../utils/gallery-item";
import { GalleryRow } from "../utils/gallery-row";
import ImageData from "../utils/image-data";
import ProjectDescription from "../utils/project-description";

import CMF1 from "../images/overlap/CMF/CMF-01.png";
import CMF2 from "../images/overlap/CMF/CMF-02.png";
import CMF3 from "../images/overlap/CMF/CMF-03.png";
import CMF4 from "../images/overlap/CMF/CMF-04.png";
import CMF5 from "../images/overlap/CMF/CMF-05.png";
import CMF6 from "../images/overlap/CMF/CMF-06.png";
import CMF7 from "../images/overlap/CMF/CMF-07.png";
import CMF8 from "../images/overlap/CMF/CMF-08.png";
import AcrylicGluing from "../images/overlap/acrylic-gluing.png";
import Assembly from "../images/overlap/assembly.png";
import BandSawCut from "../images/overlap/band-saw-cut.png";
import Benchmark from "../images/overlap/benchmark.png";
import Accessible from "../images/overlap/brand-dna/accessible.png";
import Adaptive from "../images/overlap/brand-dna/adaptive.png";
import Contemporary from "../images/overlap/brand-dna/contemporary.png";
import Playful from "../images/overlap/brand-dna/playful.png";
import Vibrant from "../images/overlap/brand-dna/vibrant.png";
import ClearMatteFinishSpray from "../images/overlap/clear-matte-finish-spray.png";
import CNC from "../images/overlap/cnc.png";
import TopImage from "../images/overlap/display.jpg";
import FileSorterUseImage1 from "../images/overlap/file-sorter-use-1.png";
import FileSorterUseImage2 from "../images/overlap/file-sorter-use-2.png";
import FileSorterImage from "../images/overlap/file-sorter.png";
import Gallery1 from "../images/overlap/gallery/gallery-1.png";
import Gallery2 from "../images/overlap/gallery/gallery-2.png";
import Gallery3 from "../images/overlap/gallery/gallery-3.png";
import Gallery4 from "../images/overlap/gallery/gallery-4.png";
import Gallery5 from "../images/overlap/gallery/gallery-5.png";
import Gallery6 from "../images/overlap/gallery/gallery-6.png";
import HandSanding from "../images/overlap/hand-sanding.png";
import Ideation from "../images/overlap/ideation.png";
import LaserCut from "../images/overlap/laser-cut.png";
import MachineSanding from "../images/overlap/machine-sanding.png";
import ManifestoImage from "../images/overlap/manifesto.jpg";
import Overlay1 from "../images/overlap/overlay-1.png";
import Overlay2 from "../images/overlap/overlay-2.png";
import Overlay3 from "../images/overlap/overlay-3.png";
import Prototype from "../images/overlap/prototype.png";
import RouterChamfer from "../images/overlap/router-chamfer.png";
import Set1 from "../images/overlap/set-1.png";
import Set2 from "../images/overlap/set-2.png";
import Set3 from "../images/overlap/set-3.png";
import TechDrawing1 from "../images/overlap/tech-drawing/tech-drawing-01.png";
import TechDrawing2 from "../images/overlap/tech-drawing/tech-drawing-02.png";
import TechDrawing3 from "../images/overlap/tech-drawing/tech-drawing-03.png";
import TechDrawing4 from "../images/overlap/tech-drawing/tech-drawing-04.png";
import TechDrawing5 from "../images/overlap/tech-drawing/tech-drawing-05.png";
import TechDrawing6 from "../images/overlap/tech-drawing/tech-drawing-06.png";
import TechDrawing7 from "../images/overlap/tech-drawing/tech-drawing-07.png";
import TechDrawing8 from "../images/overlap/tech-drawing/tech-drawing-08.png";
import TechDrawing9 from "../images/overlap/tech-drawing/tech-drawing-09.png";
import TechDrawing10 from "../images/overlap/tech-drawing/tech-drawing-10.png";
import TechDrawing11 from "../images/overlap/tech-drawing/tech-drawing-11.png";
import TimerUseImage from "../images/overlap/timer-use.png";
import TimerImage from "../images/overlap/timer.png";
import TrayUseImage1 from "../images/overlap/tray-use-1.png";
import TrayUseImage2 from "../images/overlap/tray-use-2.png";
import TrayImage from "../images/overlap/tray.png";
import WoodCut from "../images/overlap/wood-cut.png";
import WoodFlatten from "../images/overlap/wood-flatten.png";
import WoodStain from "../images/overlap/wood-stain.png";

const Overlap: NextPage = () => {
  return (
    <>
      <Head>
        <title>Overlap | Shirley Lyu Portfolio</title>
      </Head>

      <PageRoot>
        <Sidebar route="overlap" />
        <Scroller bgColor="bg-[#FDF9F1]">
          <TopDisplay
            image={TopImage}
            description={
              new ProjectDescription(
                "Overlap",
                "14 Weeks",
                "Lifestyle Product Design",
                "Prototype, Tech Drawing, Model Making, Manufacture",
                "Designing and making a line of accessories for Hay. The design will include a range of small and functional objects, which fits the brand identity and considers the company’s manufacturing techniques, as well their use of materials.",
              )
            }
            titleColor="text-gray-900"
          />

          {/* Manifesto */}
          <TextImage
            title="Project Manifesto"
            content={[
              "A collection of office accessories that can provide users with an intuitive concept of category. To help users better organize their time, space, and objects.",
            ]}
            image={ManifestoImage}
            width={6240}
            height={4160}
          />

          {/* Overlap */}
          <Title title="Overlap Set" />
          <HorizontalGallery
            items={[
              new GalleryItem(Set1, "Timer", "Section Time"),
              new GalleryItem(
                Set2,
                "File Sorter",
                "Categorize files, books, etc.",
              ),
              new GalleryItem(Set3, "Tray", "Store pens, pins, etc."),
            ]}
            sparse={true}
            width={1084}
            height={1084}
          />
          <Title title="Moodboard: Time, Space, Organizing" />
          <OverlayImage
            title="Overlapped"
            content="Time and space sometimes overlap."
            image={Overlay1}
            width={9534}
            height={3742}
          />
          <OverlayImage
            title="Changeable"
            content="Time changes are unnoticeable, so objects’ movements and Changes are used to define time pass and environment change."
            image={Overlay2}
            width={9534}
            height={3742}
          />
          <OverlayImage
            title="Joyful"
            content="Categorizing can be a joyful thing!"
            image={Overlay3}
            width={9534}
            height={3742}
          />

          {/* Timer */}
          <TextImage
            title="Timer"
            content={[
              "Overlapped part = Set up time",
              "1 Slice = 10 mins",
              "Total: 1 hour",
            ]}
            image={TimerImage}
            height={4125}
            width={4684}
          />
          <ImageText
            title="Timer usage"
            content={["Set a Time", "Set-time Passing"]}
            image={TimerUseImage}
            width={6400}
            height={4517}
          />

          {/* File Sorter */}
          <TextImage
            title="File Sorter"
            content={[
              "Four different translucent colored blockers categorize files with height and colors.",
            ]}
            image={FileSorterImage}
            width={4162}
            height={4125}
          />
          <ImageText
            title="File sorter usage 1"
            content={["Put in file"]}
            image={FileSorterUseImage1}
            width={6300}
            height={4500}
          />
          <ImageText
            title="File sorter usage 2"
            content={["Different Overlapping Order"]}
            image={FileSorterUseImage2}
            width={6300}
            height={4500}
          />

          {/* Tray */}
          <TextImage
            title="Tray"
            content={[
              "4 Different color, size, and depth trays to categorize office accessories.",
            ]}
            image={TrayImage}
            width={4684}
            height={4125}
          />
          <ImageText
            title="Tray usage 1"
            content={["Different combinations"]}
            image={TrayUseImage1}
            width={6300}
            height={4500}
          />
          <ImageText
            title="Tray usage 2"
            content={["Different usage"]}
            image={TrayUseImage2}
            width={6296}
            height={4500}
          />

          {/* Tech Drawing */}
          <Title title="Tech Drawing" />
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
          <Title title="Design Process" />
          <Subtitle subtitle="HAY's Brand DNA Analysis" />
          <HorizontalGallery
            items={[
              new GalleryItem(Playful, undefined, "Playful"),
              new GalleryItem(Accessible, undefined, "Accessible"),
              new GalleryItem(Adaptive, undefined, "Adaptive"),
              new GalleryItem(Contemporary, undefined, "Contemporary"),
              new GalleryItem(Vibrant, undefined, "Vibrant"),
            ]}
            sparse={false}
            width={926}
            height={1321}
          />

          {/* Brand Benchmark */}
          <Subtitle subtitle="HAY's Brand Benchmarks" />
          <CenterImage
            image={Benchmark}
            alt="Brand benchmark"
            width={4784}
            height={2735}
          />

          {/* Ideation */}
          <Subtitle subtitle="Overlap Ideation" />
          <FullImage
            image={Ideation}
            alt="Ideation for Overlap"
            width={8000}
            height={4500}
          />

          {/* Prototype */}
          <Subtitle subtitle="Prototype &amp; Form Perfection" />
          <FullImage
            image={Prototype}
            alt="Prototype for Overlap"
            width={7677}
            height={4163}
          />

          {/* CMF & Manufacturing */}
          <Title title="CMF &amp; Manufacturing" />
          <Carousel
            images={[CMF1, CMF2, CMF3, CMF4, CMF5, CMF6, CMF7, CMF8]}
            description="CMF"
            width={8000}
            height={4500}
          />

          {/* Making Process */}
          <Title title="Final Model Making Process" />
          <SmallGallery
            items={[
              new GalleryItem(WoodCut, "Wood Cut"),
              new GalleryItem(WoodFlatten, "Wood Flatten"),
              new GalleryItem(CNC, "CNC"),
              new GalleryItem(LaserCut, "Laser Cut"),
              new GalleryItem(BandSawCut, "Band Saw Cut"),
              new GalleryItem(MachineSanding, "Machine Sanding"),
              new GalleryItem(HandSanding, "Hand Sanding"),
              new GalleryItem(RouterChamfer, "Router Chamfer"),
              new GalleryItem(WoodStain, "Wood Stain"),
              new GalleryItem(AcrylicGluing, "Acrylic Gluing"),
              new GalleryItem(
                ClearMatteFinishSpray,
                "Clear Matte Finish Spray",
              ),
              new GalleryItem(Assembly, "Assembly"),
            ]}
            width={3063}
            height={2248}
          />

          {/* Gallery */}
          <Title title="Product Gallery" />
          <LargeGallery
            rows={[
              new GalleryRow([new ImageData(Gallery1, 12767, 7167)]),
              new GalleryRow([
                new ImageData(Gallery2, 4684, 3750),
                new ImageData(Gallery3, 4684, 3750),
                new ImageData(Gallery4, 3067, 3750),
              ]),
              new GalleryRow([new ImageData(Gallery5, 12767, 7167)]),
              new GalleryRow([new ImageData(Gallery6, 12767, 7125)]),
            ]}
            description="Overlap"
            botSpacing={false}
          />

          <div className="text-center text-xs">
            This is not a product of Hay. Branding and logo marks are used for
            demonstration purposes only.
          </div>
          <Spacing />

          <ProjectNavigation next="/lyu" />
        </Scroller>
      </PageRoot>
    </>
  );
};

export default Overlap;
