import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import DisplayImage from "../components/display-image";
import HorizontalGallery from "../components/horizontal-gallery";
import HorizontalScroll from "../components/horizontal-scroll";
import LargeGallery from "../components/large-gallery";
import Scroller from "../components/scroller";
import Spacing from "../components/spacing";
import TextImage from "../components/text-image";
import Title from "../components/title";
import TopDisplay from "../components/top-display";
import Animation from "../utils/animation";
import GalleryItem from "../utils/gallery-item";
import { GalleryRowData } from "../utils/gallery-row-data";
import ImageData from "../utils/image-data";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useFrameIndex from "../utils/use-frame-index";
import useScroll from "../utils/use-scroll";

import Brake1 from "../images/m-tron/brake-1-full.webp";
import Brake2 from "../images/m-tron/brake-2-full.webp";
import Charger1 from "../images/m-tron/charger-1-full.webp";
import Charger2 from "../images/m-tron/charger-2-full.webp";
import Details1 from "../images/m-tron/details/details-1-half.webp";
import Details2 from "../images/m-tron/details/details-2-half.webp";
import Details3 from "../images/m-tron/details/details-3-full.webp";
import Details4 from "../images/m-tron/details/details-4-full.webp";
import Gallery1 from "../images/m-tron/gallery/gallery-1-full.webp";
import Gallery2 from "../images/m-tron/gallery/gallery-2-full.webp";
import Gallery3 from "../images/m-tron/gallery/gallery-3-full.webp";
import Height1 from "../images/m-tron/height-1-full.webp";
import Height2 from "../images/m-tron/height-2-full.webp";
import Ideation from "../images/m-tron/ideation-full.webp";
import Inspiration from "../images/m-tron/inspiration-half.webp";
import Manifesto from "../images/m-tron/manifesto-half.webp";
import Moodboard1 from "../images/m-tron/moodboard/futuristic-small.webp";
import Moodboard2 from "../images/m-tron/moodboard/light-and-curve-small.webp";
import Moodboard3 from "../images/m-tron/moodboard/surface-change-small.webp";
import UserScenario from "../images/m-tron/scenario-6x.webp";
import SpeedController from "../images/m-tron/speed-controller-full.webp";

const MTron: NextPage<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);
  const currentIndex = useFrameIndex(1500);
  return (
    <>
      <Head>
        <title>M-Tron | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#353535]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("m-tron")]}
          animation={false}
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
            "The target user of todays’ shared mobility is mainly adults. There is an exclusiveness of kids. Therefore, I design this shared semi-automatic scooter inside Walt Disney World for both kids and adult. ",
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
            new GalleryItem(Moodboard1, "Futuristic"),
            new GalleryItem(Moodboard2, "Light and Curve Line"),
            new GalleryItem(Moodboard3, "Surface Change"),
          ]}
          width={640}
          height={431}
          textColor="text-white"
        />

        {/* Ideation */}
        <Title title="Ideation" textColor="text-white" />
        <DisplayImage
          source={new ImageData(Ideation, 1920, 961)}
          alt="Ideation"
        />

        {/* User Scenario */}
        <Title title="User Scenario" textColor="text-white" />
        <HorizontalScroll
          prompt="Scroll horizontally to see the whole scenario!"
          source={new ImageData(UserScenario, 11520, 1489)}
          alt="User scenario"
          textColor="text-white"
        />

        {/* Features */}
        <Title title="Features" textColor="text-white" />
        <DisplayImage
          source={new ImageData(SpeedController, 1920, 961)}
          alt="Speed controller"
          botSpacing={false}
          overlayTitle="Speed Controller"
          textPosition="right"
          textColor="text-white"
        />
        <DisplayImage
          source={new Animation([Brake1, Brake2], 1920, 961)}
          alt="Brake"
          frame={currentIndex}
          botSpacing={false}
          overlayTitle="Squeeze to Brake"
          textPosition="left"
          textColor="text-white"
        />
        <DisplayImage
          source={new Animation([Height1, Height2], 1920, 961)}
          alt="Different sizes"
          frame={currentIndex}
          botSpacing={false}
          overlayTitle="Different Height"
          textPosition="left"
          textColor="text-white"
        />
        <DisplayImage
          source={new Animation([Charger1, Charger2], 1920, 961)}
          alt="Charger"
          frame={currentIndex}
          botSpacing={false}
          overlayTitle="Charger"
          textPosition="right"
          textColor="text-white"
        />

        <div className="w-full bg-[#E4F2F5] flex flex-col items-center">
          <Spacing size="medium" />
          <Title title="Details Showcase" />
          <LargeGallery
            rows={[
              new GalleryRowData([
                new ImageData(Details1, 960, 765),
                new ImageData(Details2, 960, 765),
              ]),
              new GalleryRowData([new ImageData(Details3, 1920, 1167)]),
              new GalleryRowData([new ImageData(Details4, 1920, 1167)]),
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
            new GalleryRowData([new ImageData(Gallery1, 1920, 961)]),
            new GalleryRowData([new ImageData(Gallery2, 1920, 961)]),
            new GalleryRowData([new ImageData(Gallery3, 1920, 961)]),
          ]}
          description="M-Tron Gallery"
          botSpacing={false}
        />

        <div className="text-center text-xs text-white">
          * This is not an actual product of Disney. Branding and logo marks are
          used for demonstration purposes only as part of a student work.
        </div>
        <Spacing size="medium" />
      </Scroller>
    </>
  );
};

export default MTron;
