"use client";

import { PropsWithChildren, ReactNode } from "react";

import LegacyLargeGallery from "@/components/LegacyLargeGallery";
import Spacing from "@/components/Spacing";

import Gallery2 from "@/images/overlap/gallery/gallery-2-half.webp";
import Gallery3 from "@/images/overlap/gallery/gallery-3-half.webp";
import Gallery4 from "@/images/overlap/gallery/gallery-4-half.webp";
import Gallery5 from "@/images/overlap/gallery/gallery-5-full.webp";
import Gallery6 from "@/images/overlap/gallery/gallery-6-full.webp";

interface OverlapProps {
  topChildren: ReactNode;
}

export default function OverlapClient(props: PropsWithChildren<OverlapProps>) {
  return (
    <>
      {props.topChildren}

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
