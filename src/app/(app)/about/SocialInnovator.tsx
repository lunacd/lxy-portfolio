"use client";

import { IconX } from "@tabler/icons-react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { transitionFast } from "@/utils/transitions";

import SocialInnovatorImage from "@/images/about/social-innovator.gif";

export default function SocialInnovator() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/cH5WShEmoR8",
  );
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("v") === "kidmania") {
      setVideoLink("https://www.youtube.com/embed/cH5WShEmoR8");
      setOverlayOpen(true);
    }
  }, [searchParams]);
  return (
    <>
      {/* Setting aspect ratio on this one to use as a guideline for grid cell heights */}
      <div
        className="about_rounded relative col-span-5 col-start-1 row-span-4
          row-start-1 cursor-pointer lg:col-span-6 lg:col-start-2"
        style={{ aspectRatio: "1.65517241" }}
        onClick={() => {
          setVideoLink("https://www.youtube.com/embed/cH5WShEmoR8");
          setOverlayOpen(true);
        }}
      >
        <Image
          src={SocialInnovatorImage}
          alt="Social Innovator"
          fill
          unoptimized
          className="about_darken"
        />
        <div className="about_textOverlay">
          <div>Social Innovator</div>
        </div>
      </div>
      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            className="about_overlayWindow"
            style={{ y: "3rem" }}
            animate={{ y: "0rem" }}
            exit={{ y: "3rem", opacity: 0 }}
            transition={transitionFast}
          >
            <div className="about_overlayInner">
              {/* Close button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => {
                    setOverlayOpen(false);
                  }}
                  className="p-2"
                >
                  <IconX />
                </button>
              </div>
              {/* Main content */}
              <div className="flex h-full flex-col pt-16 lg:flex-row lg:pt-0">
                <iframe
                  src={videoLink}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="relative z-20 w-full border-0 lg:h-full lg:w-2/3"
                ></iframe>
                <div
                  className="mx-4 my-10 mb-4 flex w-full flex-col justify-center
                    overflow-y-auto lg:w-1/3"
                >
                  <div className="title mb-2">Organization Mission</div>
                  <div className="paragraph">
                    Wanyi is a city-based organization that designs and
                    organizes design-based learning after-school project for
                    kids aged from 5 to 16 to nurture their creativity,
                    communication, critical thinking, and collaboration (4C)
                    skills in China.
                  </div>
                  <div className="subtitle my-2">
                    Activity Example: Little Fashion Designer
                  </div>
                  <div className="paragraph">
                    An activity teaches kids how to make clothes by recycles.
                    Then, there will be a fashion design show held in the
                    community. Kids at different ages work together as groups to
                    design clothes and have a fashion design show.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
