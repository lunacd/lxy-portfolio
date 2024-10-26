"use client";

import { PropsWithChildren, ReactNode } from "react";

import LargeGallery from "@/components/LargeGallery";
import Spacing from "@/components/Spacing";
import DisplayImage from "@/sections/DisplayImage";
import LegacyTitle from "@/sections/LegacyTitle";
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
import SpeedController from "@/images/m-tron/speed-controller-full.webp";

interface MTronProps {
  topChildren: ReactNode;
}

export default function MTronClient(props: PropsWithChildren<MTronProps>) {
  const currentIndex = useFrameIndex(1500);
  return (
    <>
      {props.topChildren}

      {/* Features */}
      <LegacyTitle title="Features" textColor="text-white" />
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
        <LegacyTitle title="Details Showcase" />
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

      {props.children}
    </>
  );
}
