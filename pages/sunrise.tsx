import Head from "next/head";
import React from "react";

import Carousel from "../components/carousel";
import DisplayImage from "../components/display-image";
import HorizontalGallery from "../components/horizontal-gallery";
import LargeGallery from "../components/large-gallery";
import ProjectNavigation from "../components/project-navigation";
import Scroller from "../components/scroller";
import SmallGallery from "../components/small-gallery";
import Spacing from "../components/spacing";
import Subtitle from "../components/subtitle";
import TextImage from "../components/text-image";
import Title from "../components/title";
import TopDisplay from "../components/top-display";
import GalleryItem from "../utils/gallery-item";
import { GalleryRowData } from "../utils/gallery-row-data";
import ImageData from "../utils/image-data";
import { PageProps } from "../utils/page-props";
import { projectData, projects } from "../utils/project-data";
import useScroll from "../utils/use-scroll";

import Evo1 from "../images/sunrise/evolution/evolution-1-small.webp";
import Evo2 from "../images/sunrise/evolution/evolution-2-small.webp";
import Evo3 from "../images/sunrise/evolution/evolution-3-small.webp";
import Evo4 from "../images/sunrise/evolution/evolution-4-small.webp";
import Explode from "../images/sunrise/explode-full.webp";
import Gallery1 from "../images/sunrise/gallery/gallery-1-full.webp";
import Gallery2 from "../images/sunrise/gallery/gallery-2-half.webp";
import Gallery3 from "../images/sunrise/gallery/gallery-3-half.webp";
import Gallery4 from "../images/sunrise/gallery/gallery-4-full.webp";
import Gallery5 from "../images/sunrise/gallery/gallery-5-full.webp";
import Gallery6 from "../images/sunrise/gallery/gallery-6-full.webp";
import Gallery7 from "../images/sunrise/gallery/gallery-7-full.webp";
import Ideation from "../images/sunrise/ideation-full.webp";
import Making1 from "../images/sunrise/making/making-01-small.webp";
import Making2 from "../images/sunrise/making/making-02-small.webp";
import Making3 from "../images/sunrise/making/making-03-small.webp";
import Making4 from "../images/sunrise/making/making-04-small.webp";
import Making5 from "../images/sunrise/making/making-05-small.webp";
import Making6 from "../images/sunrise/making/making-06-small.webp";
import Making7 from "../images/sunrise/making/making-07-small.webp";
import Making8 from "../images/sunrise/making/making-08-small.webp";
import Making9 from "../images/sunrise/making/making-09-small.webp";
import Making10 from "../images/sunrise/making/making-10-small.webp";
import Making11 from "../images/sunrise/making/making-11-small.webp";
import Making12 from "../images/sunrise/making/making-12-small.webp";
import Making13 from "../images/sunrise/making/making-13-small.webp";
import Making14 from "../images/sunrise/making/making-14-small.webp";
import Making15 from "../images/sunrise/making/making-15-small.webp";
import Manifesto from "../images/sunrise/manifesto-half.webp";
import Detail1 from "../images/sunrise/moodboard/detail-inspiration-1-small.webp";
import Detail2 from "../images/sunrise/moodboard/detail-inspiration-2-small.webp";
import Detail3 from "../images/sunrise/moodboard/detail-inspiration-3-small.webp";
import Form1 from "../images/sunrise/moodboard/form-inspiration-1-small.webp";
import Form2 from "../images/sunrise/moodboard/form-inspiration-2-small.webp";
import Form3 from "../images/sunrise/moodboard/form-inspiration-3-small.webp";
import Ortho1 from "../images/sunrise/ortho/ortho-1-full.webp";
import Ortho2 from "../images/sunrise/ortho/ortho-2-full.webp";
import Ortho3 from "../images/sunrise/ortho/ortho-3-full.webp";
import Ortho4 from "../images/sunrise/ortho/ortho-4-full.webp";
import Ortho5 from "../images/sunrise/ortho/ortho-5-full.webp";
import UsageScenario from "../images/sunrise/usage-scenario-full.webp";

const Sunrise: React.FC<PageProps> = (props) => {
  const scrollDiv = useScroll(!props.swipeAnimation);
  return (
    <>
      <Head>
        <title>Sunrise Speaker | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#D8D6D4]" divRef={scrollDiv}>
        <TopDisplay
          project={projectData[projects.indexOf("sunrise")]}
          animation={false}
        />

        {/* Manifesto */}
        <TextImage
          title="Project Manifesto"
          content={[
            "Sunrise speaker is a professional-grade speaker ideal for both indoor and outdoor use. The speaker, shining against the rising sun, complements the peaceful and reflective lifestyle of its owners.",
          ]}
          image={Manifesto}
          width={960}
          height={1153}
        />

        {/* Usage Scenario */}
        <Title title="Usage Scenario" />
        <Subtitle subtitle="Balcony" />
        <DisplayImage
          source={new ImageData(UsageScenario, 1920, 961)}
          alt="Usage scenario setting"
          xSpacing={true}
        />

        {/* Moodboard */}
        <Title title="Moodboard" />
        <Subtitle subtitle="Balcony Speaker Form Inspiration " />
        <HorizontalGallery
          items={[
            new GalleryItem(Form1, undefined, "Slope"),
            new GalleryItem(Form2, undefined, "Segmented"),
            new GalleryItem(Form3, undefined, "Round"),
          ]}
          width={640}
          height={866}
          botSpacing={false}
        />
        <Subtitle subtitle="Balcony Speaker Details Inspiration " />
        <HorizontalGallery
          items={[
            new GalleryItem(Detail1, undefined, "Chamfer"),
            new GalleryItem(Detail2, undefined, "Rope Wrapping"),
            new GalleryItem(Detail3, undefined, "Transparent"),
          ]}
          width={640}
          height={560}
        />

        <div className="bg-[#212121] flex flex-col items-center">
          <Spacing size="medium" />
          {/* Ideation */}
          <Title title="Ideation" textColor="text-white" />
          <DisplayImage
            source={new ImageData(Ideation, 1920, 961)}
            alt="Ideation"
            xSpacing={true}
          />

          {/* Model Evolution*/}
          <Title title="Model Evolution" textColor="text-white" />
          <HorizontalGallery
            items={[
              new GalleryItem(Evo1),
              new GalleryItem(Evo2),
              new GalleryItem(Evo3),
              new GalleryItem(Evo4),
            ]}
            width={640}
            height={543}
          />

          {/* Ortho Drawing */}
          <Title title="Final Product Ortho Drawing" textColor="text-white" />
          <Carousel
            images={[Ortho1, Ortho2, Ortho3, Ortho4, Ortho5]}
            description="Ortho drawing"
            height={960}
            width={1920}
            textColor="text-white"
          />

          {/* Explode */}
          <Title title="Exploded View" textColor="text-white" />
          <div className="single px-32">
            <DisplayImage
              source={new ImageData(Explode, 1920, 2149)}
              alt="Exploded view"
              xSpacing={false}
            />
          </div>

          {/* Making */}
          <Title title="Final model making Process" textColor="text-white" />
          <SmallGallery
            items={[
              new GalleryItem(Making1, "20lb Foam Route Template"),
              new GalleryItem(Making2, "Foam Frame and Stander Making"),
              new GalleryItem(Making3, "Bondo"),
              new GalleryItem(Making4, "Spraying Primer"),
              new GalleryItem(Making5, "Broken Repair & Bondo Sanding"),
              new GalleryItem(Making6, "Color Paint and Clear Coat"),
              new GalleryItem(Making7, "Sanding - 800 Grid"),
              new GalleryItem(Making8, "Matte Paint"),
              new GalleryItem(Making9, "Wire Soldering"),
              new GalleryItem(Making10, "Inside Structure Making"),
              new GalleryItem(Making11, "Chamfer Making"),
              new GalleryItem(Making12, "Acrylic Spray Paint"),
              new GalleryItem(Making13, "Foam Taping for Sealing"),
              new GalleryItem(Making14, "Buttons Making"),
              new GalleryItem(Making15, "Mounting up All Parts"),
            ]}
            width={640}
            height={470}
            textColor="text-white"
          />
        </div>

        <Spacing size="medium" />
        {/* Gallery */}
        <Title title="Product Gallery" />

        <Subtitle subtitle="Outdoor" />
        <LargeGallery
          rows={[
            new GalleryRowData([new ImageData(Gallery1, 1920, 1279)]),
            new GalleryRowData([
              new ImageData(Gallery2, 960, 1347),
              new ImageData(Gallery3, 960, 1347),
            ]),
            new GalleryRowData([new ImageData(Gallery4, 1920, 1279)]),
          ]}
          description="Outdoor gallery"
          botSpacing={false}
        />
        <Subtitle subtitle="Indoor" />
        <LargeGallery
          rows={[
            new GalleryRowData([new ImageData(Gallery5, 1920, 1279)]),
            new GalleryRowData([new ImageData(Gallery6, 1920, 1279)]),
            new GalleryRowData([new ImageData(Gallery7, 1920, 1279)]),
          ]}
          description="Indoor gallery"
        />

        <ProjectNavigation prev="/sunrise" next="/soul" />
      </Scroller>
    </>
  );
};

export default Sunrise;
