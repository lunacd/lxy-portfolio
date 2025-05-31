import ConditionalScrollIndicator from "./ConditionalScrollIndicator";
import SocialInnovator from "./SocialInnovator";
import config from "@payload-config";
import { Global } from "@payload-types";
import { Metadata } from "next";
import Image from "next/image";
import { Payload, getPayload } from "payload";
import { Suspense } from "react";

import TitleBlock from "@/blocks/TitleBlock";
import AnimationCoordinator from "@/components/AnimationCoordinator";
import Button from "@/components/Button";
import FloatUpMotion from "@/components/FloatUpMotion";
import LegacySpacing from "@/components/LegacySpacing";
import PayloadImage from "@/components/PayloadImage";
import SlideShow from "@/components/SlideShow";
import { unwrapImages } from "@/utils/payloadHelpers";

import NatureObserver from "@/images/about/nature-observer.gif";
import Sports from "@/images/about/sports.gif";

export const metadata: Metadata = {
  title: "About | Shirley Lyu",
};

function VideoGallery({ data, payload }: { data: Global; payload: Payload }) {
  return (
    <>
      {/* Desktop first row */}
      <div className="single mb-4 grid grid-cols-5 grid-rows-13 gap-4 lg:grid-cols-12 lg:grid-rows-12">
        {/* Social innovator */}
        <SocialInnovator />

        {/* Traveller */}
        <div
          className="about_rounded relative col-span-3 col-start-3 row-span-3 row-start-9
            lg:col-span-4 lg:col-start-8 lg:row-start-2"
        >
          <div className="about_darken h-full w-full">
            <SlideShow
              images={data.travellerImages.map(unwrapImages)}
              payload={payload}
              sizes="(min-width: 64rem) 33vw, (max-width: 64rem) 67vw"
              className="relative h-full w-full"
              fill
            />
          </div>
          <div className="about_textOverlay">
            <div>Traveller</div>
          </div>
        </div>

        {/* Craftsperson */}
        <div
          className="about_rounded relative col-span-2 col-start-1 row-span-3 row-start-9
            lg:col-span-3 lg:row-start-5"
        >
          <div className="about_darken h-full w-full">
            <SlideShow
              images={data.craftspersonImages.map(unwrapImages)}
              payload={payload}
              sizes="(min-width: 64rem) 20vw, (max-width: 64rem) 33vw"
              className="relative h-full w-full"
              fill
            />
          </div>
          <div className="about_textOverlay">
            <div>Craftsperson</div>
          </div>
        </div>

        {/* Photographer */}
        <div
          className="about_rounded relative col-span-2 col-start-4 row-span-3 row-start-12
            lg:col-span-3 lg:col-start-1 lg:row-start-8"
        >
          <div className="about_darken h-full w-full">
            <SlideShow
              images={data.photographerImages.map(unwrapImages)}
              payload={payload}
              sizes="(min-width: 64rem) 20vw, (max-width: 64rem) 33vw"
              className="relative h-full w-full"
              fill
            />
          </div>
          <div className="about_textOverlay">
            <div>Photographer</div>
          </div>
        </div>

        {/* Nature observer */}
        <div
          className="about_rounded relative col-span-5 col-start-1 row-span-4 row-start-5
            lg:col-span-6 lg:col-start-4 lg:row-start-5"
          style={{ flex: 960 / 606 }}
        >
          <Image
            src={NatureObserver}
            alt="Nature Observer"
            fill
            className="about_darken"
            unoptimized
          />
          <div className="about_textOverlay">
            <div>Nature Observer</div>
          </div>
        </div>

        {/* Dog lover */}
        <div
          className="about_rounded relative col-span-3 col-start-10 row-span-4 row-start-5 hidden
            lg:block"
          style={{
            flex: 640 / 838,
          }}
        >
          <div className="about_darken h-full w-full">
            <SlideShow
              images={data.dogLoverImages.map(unwrapImages)}
              payload={payload}
              sizes="(min-width: 64rem) 20vw, (max-width: 64rem) 0"
              className="relative h-full w-full"
              fill
            />
          </div>
          <div className="about_textOverlay">
            <div>Dog Lover</div>
          </div>
        </div>

        {/* Thinker */}
        <div
          className="about_rounded relative col-span-3 col-start-4 row-span-4 row-start-9 hidden
            lg:block"
        >
          <div className="about_darken h-full w-full">
            <SlideShow
              images={data.thinkerImages.map(unwrapImages)}
              payload={payload}
              sizes="(min-width: 64rem) 20vw, (max-width: 64rem) 0"
              className="relative h-full w-full"
              fill
            />
          </div>
          <div className="about_textOverlay">
            <div>Thinker</div>
          </div>
        </div>
        {/* Sports lover */}
        <div
          className="about_rounded relative col-span-3 col-start-1 row-span-3 row-start-12
            lg:col-span-4 lg:col-start-7 lg:row-start-9"
        >
          <Image
            src={Sports}
            alt="Sports Lover"
            fill
            unoptimized
            className="about_darken"
          />
          <div className="about_textOverlay">
            <div>Sports Lover</div>
          </div>
        </div>
      </div>

      <LegacySpacing size="large" />
    </>
  );
}

export default async function About() {
  const payload = await getPayload({
    config,
  });
  const data = await payload.findGlobal({
    slug: "global",
  });
  return (
    <AnimationCoordinator frameDuration={3000}>
      <ConditionalScrollIndicator>
        <div className="single my-spacing-lg gap-spacing grid grid-cols-1 lg:grid-cols-3">
          <div className="about_rounded">
            <PayloadImage
              media={data.profilePicture}
              payload={payload}
              sizes="(max-width: 1023px) 100vw,(min-width: 1024px) 33vw"
            />
          </div>
          <div className="lg:col-span-2 lg:self-end">{data.profile}</div>
        </div>

        {/* Resume */}
        <Button href="/documents/resume" color="dark">
          Resume
        </Button>
        <LegacySpacing size="large" />

        <div className="w-single">
          <TitleBlock
            text="Who I am"
            textColor="dark"
            blockType="title"
            bottomMargin="large"
            titleType="title"
          />
        </div>
        <Suspense>
          <VideoGallery data={data} payload={payload} />
        </Suspense>

        <div className="w-single">
          <TitleBlock
            text="Tools I Use"
            textColor="dark"
            blockType="title"
            bottomMargin="large"
            titleType="title"
          />
        </div>
        <div
          className="single mb-spacing-3lg flex flex-row flex-wrap justify-center gap-4
            lg:justify-between"
        >
          {data.tools.map((tool, index) => (
            <FloatUpMotion key={index}>
              <PayloadImage
                media={tool.image}
                payload={payload}
                sizes="128px"
                className="w-12 lg:w-16"
              />
            </FloatUpMotion>
          ))}
        </div>
      </ConditionalScrollIndicator>
    </AnimationCoordinator>
  );
}
