import { AnimatePresence, motion, useInView } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";

import Animatable from "../components/animatable";
import Button from "../components/button";
import Scroller from "../components/scroller";
import Spacing from "../components/spacing";
import Title from "../components/title";
import styles from "../styles/about.module.css";
import Animation from "../utils/animation";
import { transitionFast } from "../utils/transition";
import useFrameIndex from "../utils/use-frame-index";

import CraftsPerson1 from "../images/about/craftsperson-1-small.webp";
import CraftsPerson2 from "../images/about/craftsperson-2-small.webp";
import CraftsPerson3 from "../images/about/craftsperson-3-small.webp";
import Dog1 from "../images/about/dog-1-small.webp";
import Dog2 from "../images/about/dog-2-small.webp";
import Dog3 from "../images/about/dog-3-small.webp";
import Dog4 from "../images/about/dog-4-small.webp";
import Photo1 from "../images/about/photo-1-small.webp";
import Photo2 from "../images/about/photo-2-small.webp";
import Photo3 from "../images/about/photo-3-small.webp";
import Photo4 from "../images/about/photo-4-small.webp";
import Photo5 from "../images/about/photo-5-small.webp";
import Profile from "../images/about/profile-half.webp";
import Sports from "../images/about/sports.gif";
import Thinker1 from "../images/about/thinker-1-small.webp";
import Thinker2 from "../images/about/thinker-2-small.webp";
import Thinker3 from "../images/about/thinker-3-small.webp";
import Thinker4 from "../images/about/thinker-4-small.webp";
import Tool1 from "../images/about/tools-1-icon.webp";
import Tool2 from "../images/about/tools-2-icon.webp";
import Tool3 from "../images/about/tools-3-icon.webp";
import Tool4 from "../images/about/tools-4-icon.webp";
import Tool5 from "../images/about/tools-5-icon.webp";
import Tool6 from "../images/about/tools-6-icon.webp";
import Tool7 from "../images/about/tools-7-icon.webp";
import Tool8 from "../images/about/tools-8-icon.webp";
import Tool9 from "../images/about/tools-9-icon.webp";
import Traveller1 from "../images/about/traveller-1-small.webp";
import Traveller2 from "../images/about/traveller-2-small.webp";
import Traveller3 from "../images/about/traveller-3-small.webp";
import Traveller4 from "../images/about/traveller-4-small.webp";
import Traveller5 from "../images/about/traveller-5-small.webp";
import Traveller6 from "../images/about/traveller-6-small.webp";

const Tools = [Tool1, Tool2, Tool3, Tool4, Tool5, Tool6, Tool7, Tool8, Tool9];

const About: NextPage = () => {
  const frame = useFrameIndex(3000);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/cH5WShEmoR8",
  );
  return (
    <>
      <Head>
        <title>About | Shirley Lyu Portfolio</title>
      </Head>

      <Scroller bgColor="bg-[#FDF9F1]">
        <div className="single grid grid-cols-2 gap-spacing my-spacing-lg">
          <div className={styles.rounded}>
            <Image
              src={Profile}
              width={960}
              height={900}
              alt="Shirley Lyu profile photo"
              placeholder="blur"
            />
          </div>
          <div className="self-end">
            Hello! This is Shirley Lyu. I am a product designer with infinite
            bizarre ideas. I am interested in lifestyle products, spatial
            experience, sustainability, social innovation, soft goods, and
            consumer electronics.
          </div>
        </div>

        <Button text="Resume" href="/resume.pdf" />
        <Spacing size="medium" />

        <Title title="Who I am" />
        <div className="mb-4 grid grid-cols-12 gap-4 single">
          <div
            className={`col-start-2 col-span-6 relative cursor-pointer ${styles.rounded}`}
            onClick={() => {
              setVideoLink("https://www.youtube.com/embed/cH5WShEmoR8");
              setOverlayOpen(true);
            }}
          >
            <video
              src="/social-innovator.mp4"
              autoPlay
              loop
              className={styles.darken}
            />
            <div className={styles.textOverlay}>
              <div>Social Innovator</div>
            </div>
          </div>
          <div
            className={`col-start-8 col-span-4 self-end relative ${styles.rounded}`}
          >
            <div className={`w-full ${styles.darken}`}>
              <Animatable
                source={
                  new Animation(
                    [
                      Traveller1,
                      Traveller2,
                      Traveller3,
                      Traveller4,
                      Traveller5,
                      Traveller6,
                    ],
                    640,
                    440,
                  )
                }
                frame={frame}
                alt="Traveller"
              />
            </div>
            <div className={styles.textOverlay}>
              <div>Traveller</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mb-spacing-3lg single gap-4">
          <div className={`space-y-4 col-span-3`}>
            <div className={`relative ${styles.rounded}`}>
              <div className={`w-full ${styles.darken}`}>
                <Animatable
                  source={
                    new Animation(
                      [CraftsPerson1, CraftsPerson2, CraftsPerson3],
                      640,
                      652,
                    )
                  }
                  frame={frame}
                  alt="Craftsperson"
                />
              </div>
              <div className={styles.textOverlay}>
                <div>Craftsperson</div>
              </div>
            </div>
            <div className={`relative ${styles.rounded}`}>
              <div className={`w-full ${styles.darken}`}>
                <Animatable
                  source={
                    new Animation(
                      [Photo1, Photo2, Photo3, Photo4, Photo5],
                      640,
                      669,
                    )
                  }
                  frame={frame}
                  alt="Photographer"
                />
              </div>
              <div className={styles.textOverlay}>
                <div>Photographer</div>
              </div>
            </div>
          </div>
          <div className="col-start-4 col-span-9">
            <div className="space-y-4">
              <div className="grid grid-cols-9 gap-4">
                <div className={`col-span-6 relative ${styles.rounded}`}>
                  <video
                    src="/nature-observer.mp4"
                    autoPlay
                    loop
                    className={styles.darken}
                  />
                  <div className={styles.textOverlay}>
                    <div>Nature Observer</div>
                  </div>
                </div>
                <div
                  className={`col-span-3 relative ${styles.rounded} self-start`}
                >
                  <div className={`w-full ${styles.darken}`}>
                    <Animatable
                      source={new Animation([Dog1, Dog2, Dog3, Dog4], 640, 838)}
                      frame={frame}
                      alt="Dog lover"
                    />
                  </div>
                  <div className={styles.textOverlay}>
                    <div>Dog Lover</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-9 gap-4">
                <div className={`col-span-3 relative ${styles.rounded}`}>
                  <div className={`w-full ${styles.darken}`}>
                    <Animatable
                      source={
                        new Animation(
                          [Thinker1, Thinker2, Thinker3, Thinker4],
                          640,
                          933,
                        )
                      }
                      frame={frame}
                      alt="Thinker"
                    />
                  </div>
                  <div className={styles.textOverlay}>
                    <div>Thinker</div>
                  </div>
                </div>
                <div
                  className={`col-span-4 relative ${styles.rounded} self-start`}
                >
                  <Image
                    className={styles.darken}
                    src={Sports}
                    alt="Sports Lover"
                    width={480}
                    height={360}
                  />
                  <div className={styles.textOverlay}>
                    <div>Sports Lover</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Title title="Tools I use" />
        <div
          className="flex gap-4 flex-row flex-wrap single justify-between mb-spacing-3lg"
          ref={ref}
        >
          {Tools.map((Tool, index) => (
            <motion.div
              className="w-16"
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
      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            className="absolute left-spacing-lg right-spacing-lg top-spacing-lg bottom-spacing-lg bg-white rounded-xl shadow-lg overflow-hidden z-20"
            style={{ y: "3rem" }}
            animate={{ y: "0rem" }}
            exit={{ y: "3rem", opacity: 0 }}
            transition={transitionFast}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={() => {
                  setOverlayOpen(false);
                }}
                className="p-2"
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <div className="flex flex-row h-full">
              <iframe
                src={videoLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0 w-2/3 h-full relative z-20"
              ></iframe>
              <div className="w-1/3 p-4 flex flex-col justify-center">
                <div className="title mb-2">Organization Mission</div>
                <div className="paragraph">
                  Wanyi is a city-based organization that designs and organizes
                  design-based learning after-school project for kids aged from
                  5 to 16 to nurture their creativity, communication, critical
                  thinking, and collaboration (4C) skills in China.
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
