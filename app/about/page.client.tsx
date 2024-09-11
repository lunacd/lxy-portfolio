"use client";

import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

import Animatable from "@/components/Animatable";
import Button from "@/components/Button";
import Scroller from "@/components/Scroller";
import Spacing from "@/components/Spacing";
import Title from "@/sections/Title";
import { transitionFast } from "@/utils/transitions";
import useFrameIndex from "@/utils/useFrameIndex";

import CraftsPerson1 from "@/images/about/craftsperson-1-small.webp";
import CraftsPerson2 from "@/images/about/craftsperson-2-small.webp";
import CraftsPerson3 from "@/images/about/craftsperson-3-small.webp";
import Dog1 from "@/images/about/dog-1-small.webp";
import Dog2 from "@/images/about/dog-2-small.webp";
import Dog3 from "@/images/about/dog-3-small.webp";
import Dog4 from "@/images/about/dog-4-small.webp";
import Photo1 from "@/images/about/photo-1-small.webp";
import Photo2 from "@/images/about/photo-2-small.webp";
import Photo3 from "@/images/about/photo-3-small.webp";
import Photo4 from "@/images/about/photo-4-small.webp";
import Photo5 from "@/images/about/photo-5-small.webp";
import Profile from "@/images/about/profile-half.webp";
import Sports from "@/images/about/sports.gif";
import Thinker1 from "@/images/about/thinker-1-small.webp";
import Thinker2 from "@/images/about/thinker-2-small.webp";
import Thinker3 from "@/images/about/thinker-3-small.webp";
import Tool1 from "@/images/about/tools-1-icon.webp";
import Tool2 from "@/images/about/tools-2-icon.webp";
import Tool3 from "@/images/about/tools-3-icon.webp";
import Tool4 from "@/images/about/tools-4-icon.webp";
import Tool5 from "@/images/about/tools-5-icon.webp";
import Tool6 from "@/images/about/tools-6-icon.webp";
import Tool7 from "@/images/about/tools-7-icon.webp";
import Tool8 from "@/images/about/tools-8-icon.webp";
import Tool9 from "@/images/about/tools-9-icon.webp";
import Traveller1 from "@/images/about/traveller-1-small.webp";
import Traveller2 from "@/images/about/traveller-2-small.webp";
import Traveller3 from "@/images/about/traveller-3-small.webp";
import Traveller4 from "@/images/about/traveller-4-small.webp";
import Traveller5 from "@/images/about/traveller-5-small.webp";
import Traveller6 from "@/images/about/traveller-6-small.webp";

const Tools = [Tool1, Tool2, Tool3, Tool4, Tool5, Tool6, Tool7, Tool8, Tool9];

function VideoGallery() {
  const frame = useFrameIndex(3000);
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
      {/* Desktop first row */}
      <div className="single mb-4 hidden grid-cols-12 gap-4 lg:grid">
        {/* Social innovator */}
        <div
          className="about_rounded relative col-span-6 col-start-2 cursor-pointer"
          onClick={() => {
            setVideoLink("https://www.youtube.com/embed/cH5WShEmoR8");
            setOverlayOpen(true);
          }}
        >
          <video
            src="/social-innovator.mp4"
            autoPlay
            loop
            className="about_darken"
          />
          <div className="about_textOverlay">
            <div>Social Innovator</div>
          </div>
        </div>

        {/* Traveller */}
        <div className="about_rounded relative col-span-4 col-start-8 self-end">
          <div className="about_darken w-full">
            <Animatable
              source={{
                frames: [
                  { src: Traveller1 },
                  { src: Traveller2 },
                  { src: Traveller3 },
                  { src: Traveller4 },
                  { src: Traveller5 },
                  { src: Traveller6 },
                ],
                width: 640,
                height: 440,
              }}
              frame={frame}
              alt="Traveller"
            />
          </div>
          <div className="about_textOverlay">
            <div>Traveller</div>
          </div>
        </div>
      </div>

      {/* Desktop second row */}
      <div className="single mb-spacing-3lg hidden grid-cols-12 gap-4 lg:grid">
        {/* Desktop first col of second row */}
        <div className="col-span-3 space-y-4">
          {/* Craftsperson */}
          <div className="about_rounded relative">
            <div className="about_darken w-full">
              <Animatable
                source={{
                  frames: [
                    { src: CraftsPerson1 },
                    { src: CraftsPerson2 },
                    { src: CraftsPerson3 },
                  ],
                  width: 640,
                  height: 652,
                }}
                frame={frame}
                alt="Craftsperson"
              />
            </div>
            <div className="about_textOverlay">
              <div>Craftsperson</div>
            </div>
          </div>

          {/* Photographer */}
          <div className="about_rounded relative">
            <div className="about_darken w-full">
              <Animatable
                source={{
                  frames: [
                    { src: Photo1 },
                    { src: Photo2 },
                    { src: Photo3 },
                    { src: Photo4 },
                    { src: Photo5 },
                  ],
                  width: 640,
                  height: 669,
                }}
                frame={frame}
                alt="Photographer"
              />
            </div>
            <div className="about_textOverlay">
              <div>Photographer</div>
            </div>
          </div>
        </div>

        {/* Desktop second col second row */}
        <div className="col-span-9 col-start-4 space-y-4">
          {/* Desktop second col second row, inner first row */}
          <div className="flex flex-row gap-4">
            {/* Nature observer */}
            <div className="about_rounded relative" style={{ flex: 960 / 606 }}>
              <video
                src="/nature-observer.mp4"
                autoPlay
                loop
                className="about_darken"
              />
              <div className="about_textOverlay">
                <div>Nature Observer</div>
              </div>
            </div>
            {/* Dog lover */}
            <div
              className="about_rounded relative"
              style={{
                flex: 640 / 838,
              }}
            >
              <div className="about_darken w-full">
                <Animatable
                  source={{
                    frames: [
                      { src: Dog1 },
                      { src: Dog2 },
                      { src: Dog3 },
                      { src: Dog4 },
                    ],
                    width: 640,
                    height: 838,
                  }}
                  frame={frame}
                  alt="Dog lover"
                />
              </div>
              <div className="about_textOverlay">
                <div>Dog Lover</div>
              </div>
            </div>
          </div>

          {/* Desktop second col second row, inner second row */}
          <div className="grid grid-cols-9 gap-4">
            {/* Thinker */}
            <div className="about_rounded relative col-span-3">
              <div className="about_darken w-full">
                <Animatable
                  source={{
                    frames: [
                      { src: Thinker1 },
                      { src: Thinker2 },
                      { src: Thinker3 },
                    ],
                    width: 640,
                    height: 933,
                  }}
                  frame={frame}
                  alt="Thinker"
                />
              </div>
              <div className="about_textOverlay">
                <div>Thinker</div>
              </div>
            </div>
            {/* Sports lover */}
            <div className="about_rounded relative col-span-4 self-start">
              <Image
                className="about_darken"
                src={Sports}
                alt="Sports Lover"
                width={480}
                height={360}
                unoptimized
              />
              <div className="about_textOverlay">
                <div>Sports Lover</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {/* First row: Thinker / Social innovator */}
      <div className="single mb-4 flex flex-row space-x-4 lg:hidden">
        <div className="about_rounded relative" style={{ flex: 640 / 933 }}>
          <Animatable
            source={{
              frames: [{ src: Thinker1 }, { src: Thinker2 }, { src: Thinker3 }],
              width: 640,
              height: 933,
            }}
            frame={frame}
            alt="Thinker"
          />
          <div className="about_textOverlay">
            <div>Thinker</div>
          </div>
        </div>
        <div
          className="about_rounded relative cursor-pointer"
          onClick={() => {
            setVideoLink("https://www.youtube.com/embed/cH5WShEmoR8");
            setOverlayOpen(true);
          }}
          style={{ flex: 960 / 580 }}
        >
          <video
            src="/social-innovator.mp4"
            autoPlay
            loop
            className="about_darken"
          />
          <div className="about_textOverlay">
            <div>Social Innovator</div>
          </div>
        </div>
      </div>

      {/* Second row: Nature observer / Dog lover */}
      <div className="single mb-4 flex flex-row space-x-4 lg:hidden">
        <div className="about_rounded relative" style={{ flex: 960 / 606 }}>
          <video
            src="/nature-observer.mp4"
            autoPlay
            loop
            className="about_darken"
          />
          <div className="about_textOverlay">
            <div>Nature Observer</div>
          </div>
        </div>
        <div
          className="about_rounded relative"
          style={{
            flex: 640 / 838,
          }}
        >
          <div className="about_darken w-full">
            <Animatable
              source={{
                frames: [
                  { src: Dog1 },
                  { src: Dog2 },
                  { src: Dog3 },
                  { src: Dog4 },
                ],
                width: 640,
                height: 838,
              }}
              frame={frame}
              alt="Dog lover"
            />
          </div>
          <div className="about_textOverlay">
            <div>Dog Lover</div>
          </div>
        </div>
      </div>

      {/* Third row: Craftsperson / Traveller */}
      <div className="single mb-4 flex flex-row space-x-4 lg:hidden">
        <div className="about_rounded relative" style={{ flex: 640 / 652 }}>
          <div className="about_darken w-full">
            <Animatable
              source={{
                frames: [
                  { src: CraftsPerson1 },
                  { src: CraftsPerson2 },
                  { src: CraftsPerson3 },
                ],
                width: 640,
                height: 652,
              }}
              frame={frame}
              alt="Craftsperson"
            />
          </div>
          <div className="about_textOverlay">
            <div>Craftsperson</div>
          </div>
        </div>
        <div className="about_rounded relative" style={{ flex: 640 / 440 }}>
          <div className="about_darken w-full">
            <Animatable
              source={{
                frames: [
                  { src: Traveller1 },
                  { src: Traveller2 },
                  { src: Traveller3 },
                  { src: Traveller4 },
                  { src: Traveller5 },
                  { src: Traveller6 },
                ],
                width: 640,
                height: 440,
              }}
              frame={frame}
              alt="Traveller"
            />
          </div>
          <div className="about_textOverlay">
            <div>Traveller</div>
          </div>
        </div>
      </div>

      {/* Fourth row: Sports lover / photographer */}
      <div className="single mb-spacing-3lg flex flex-row space-x-4 lg:hidden">
        <div
          className="about_rounded relative"
          style={{
            flex: 480 / 360,
          }}
        >
          <Image
            className="about_darken"
            src={Sports}
            alt="Sports Lover"
            width={480}
            height={360}
          />
          <div className="about_textOverlay">
            <div>Sports Lover</div>
          </div>
        </div>
        <div className="about_rounded relative" style={{ flex: 640 / 669 }}>
          <div className="about_darken w-full">
            <Animatable
              source={{
                frames: [
                  { src: Photo1 },
                  { src: Photo2 },
                  { src: Photo3 },
                  { src: Photo4 },
                  { src: Photo5 },
                ],
                width: 640,
                height: 669,
              }}
              frame={frame}
              alt="Photographer"
            />
          </div>
          <div className="about_textOverlay">
            <div>Photographer</div>
          </div>
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
              <div className="absolute right-4 top-4">
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
                <div className="mb-4 flex w-full flex-col justify-center p-4 lg:w-1/3">
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

export default function AboutClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Scroller bgColor="bg-[#FDF9F1]">
      {/* Extra spacing on mobile */}
      <div className="pt-16"></div>

      {/* Profile */}
      <div className="single my-spacing-lg grid gap-spacing lg:grid-cols-2">
        <div className="about_rounded">
          <Image
            src={Profile}
            width={960}
            height={900}
            alt="Shirley Lyu profile photo"
            placeholder="blur"
          />
        </div>
        <div className="lg:self-end">
          I am a multidisciplinary product designer with a passion for creating
          intuitive and impactful user experiences. My industrial design skills
          and instructional design insights enable me to craft solutions that
          are both engaging and inclusive. With a strong foundation in UI/UX,
          lifestyle product design, and EdTech, I create products that enhance
          both digital and physical interactions.
        </div>
      </div>

      {/* Resume */}
      <Button text="Resume" href="/resume.pdf" />
      <Spacing size="large" />

      <Title title="Who I am" />
      <Suspense>
        <VideoGallery />
      </Suspense>

      <Title title="Tools I use" />
      <div
        className="single mb-spacing-3lg flex flex-row flex-wrap justify-center gap-4
          lg:justify-between"
        ref={ref}
      >
        {Tools.map((Tool, index) => (
          <motion.div
            className="w-12 lg:w-16"
            key={index}
            style={{ y: "3rem" }}
            animate={{ y: isInView ? "0rem" : "3rem" }}
            transition={{
              ...transitionFast,
              delay: index * 0.03,
            }}
          >
            <Image
              src={Tool}
              alt=""
              width={128}
              height={128}
              placeholder="blur"
            />
          </motion.div>
        ))}
      </div>
    </Scroller>
  );
}
