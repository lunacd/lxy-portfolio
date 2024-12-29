"use client";

import { PropsWithChildren, ReactNode } from "react";

import LegacyLargeGallery from "@/components/LegacyLargeGallery";
import LegacyTitle from "@/components/LegacyTitle";
import Spacing from "@/components/Spacing";

import Details1 from "@/images/m-tron/details/details-1-half.webp";
import Details2 from "@/images/m-tron/details/details-2-half.webp";
import Details3 from "@/images/m-tron/details/details-3-full.webp";
import Details4 from "@/images/m-tron/details/details-4-full.webp";
import Gallery1 from "@/images/m-tron/gallery/gallery-1-full.webp";
import Gallery2 from "@/images/m-tron/gallery/gallery-2-full.webp";
import Gallery3 from "@/images/m-tron/gallery/gallery-3-full.webp";

interface MTronProps {
  topChildren: ReactNode;
}

export default function MTronClient(props: PropsWithChildren<MTronProps>) {
  return (
    <>
      {props.topChildren}

      <div className="flex w-full flex-col items-center bg-[#E4F2F5]">
        <Spacing size="medium" />
        <LegacyTitle title="Details Showcase" />
        <LegacyLargeGallery
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

      <LegacyLargeGallery
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
