"use client";

import { useMediaQuery } from "@chakra-ui/react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconChevronLeft,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Tooltip from "@/components/Tooltip";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { transitionFast as transitionDefault } from "@/utils/transitions";

import HamburgerBlack from "@/images/hamburger-black.svg";

const MotionImage = motion.create(Image);
const MotionIconChevronLeft = motion.create(IconChevronLeft);
const MotionLink = motion.create(Link);

const dashVariants = {
  rest: { opacity: 0 },
  hovered: { opacity: 1 },
};

const linkVariants = {
  rest: { x: 0 },
  hovered: { x: "0.75rem" },
};

function scrollElementIntoView(id: string) {
  const targetElement = document.getElementById(id);
  targetElement?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function SidebarInteractive() {
  const { globalState } = useGlobalStateContext();

  const [isLG, isXL] = useMediaQuery(
    ["(min-width: 1024px)", "(min-width: 1280px)"],
    {
      ssr: true,
      fallback: [false, false],
    },
  );
  const [open, setOpen] = useState(isLG);
  useEffect(() => {
    setOpen(isLG);
  }, [isLG]);

  return (
    <>
      {/* Main container */}
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: open && globalState.onLanding ? "0%" : "-100%",
        }}
        transition={transitionDefault}
        className="absolute z-10 h-screen w-[16rem] flex-shrink-0 bg-white
          shadow-lg lg:min-h-[30rem] xl:min-h-[34rem] xl:w-[21rem]"
      >
        {/* Content container */}
        <div
          className="absolute top-0 right-10 flex h-full w-44 flex-col
            justify-between py-16 xl:right-20"
        >
          {/* Logo */}
          <Link
            className="cursor-pointer"
            onClick={() => {
              if (!isLG) {
                setOpen(false);
              }
            }}
            href="/"
          >
            <div className="w-full">
              <Image
                src="/logo.svg"
                alt="Shirley Lyu Logo"
                className="cursor-pointer"
                height={75}
                width={167}
                unoptimized
              />
            </div>
          </Link>

          {/* Routes */}
          <div className="flex flex-col space-y-1 pt-4 pb-6">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                className="paragraph cursor-pointer font-semibold!"
                transition={transitionDefault}
                layout
                key="about"
                onClick={() => {
                  scrollElementIntoView("about-me");
                }}
              >
                About
              </motion.div>
              <MotionLink
                className="paragraph font-semibold!"
                href="/"
                key="title"
              >
                {globalState.title}
              </MotionLink>
              <motion.div
                key={globalState.focus ? globalState.focus : "all"}
                transition={transitionDefault}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {globalState.sideBarRoutes.map((route) => (
                  <motion.div key={route.uri} className="flex flex-row">
                    <motion.div
                      className="flex flex-row items-center"
                      animate={
                        globalState.currentProject === route.uri
                          ? "hovered"
                          : "rest"
                      }
                      whileHover="hovered"
                    >
                      <div
                        onClick={() => {
                          scrollElementIntoView(route.uri);
                        }}
                        className={"paragraph cursor-pointer"}
                      >
                        <motion.div
                          className="absolute"
                          transition={transitionDefault}
                          variants={dashVariants}
                        >
                          -
                        </motion.div>
                        <motion.div
                          transition={transitionDefault}
                          variants={linkVariants}
                        >
                          {route.name}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="paragraph cursor-pointer font-semibold!"
                transition={transitionDefault}
                layout
                key="testimonials"
                onClick={() => {
                  scrollElementIntoView("testimonials");
                }}
              >
                Testimonials
              </motion.div>
              <motion.div
                className="paragraph cursor-pointer font-semibold!"
                transition={transitionDefault}
                layout
                key="blog"
                onClick={() => {
                  scrollElementIntoView("blogs");
                }}
              >
                Blogs
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Social links */}
          <div className="flex flex-row justify-between">
            <Tooltip tip="Instagram">
              <a
                href="https://www.instagram.com/lyu.shirley/"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandInstagram size={isLG ? 20 : 18} />
              </a>
            </Tooltip>
            <Tooltip tip="Email">
              <a href="mailto:shirley.lyu.xiaoya@gmail.com">
                <IconMail size={isLG ? 20 : 18} />
              </a>
            </Tooltip>
            <Tooltip tip="LinkedIn">
              <a
                href="https://www.linkedin.com/in/xiaoya-lyu-11b68419b/"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandLinkedin size={isLG ? 20 : 18} />
              </a>
            </Tooltip>
            <Tooltip tip="Resume">
              <a href="/documents/resume" target="_blank" rel="noreferrer">
                <IconFileText size={isLG ? 20 : 18} />
              </a>
            </Tooltip>
          </div>
        </div>

        {/* Open-close button: desktop */}
        {globalState.onLanding && (
          <div
            className="absolute top-20 -right-16 z-20 hidden h-24 w-16
              overflow-hidden lg:block xl:-right-20 xl:w-20"
          >
            <div
              className="absolute top-0 -left-8 h-16 w-16 cursor-pointer
                rounded-full bg-white shadow-lg xl:-left-10 xl:h-20 xl:w-20"
              onClick={() => {
                setOpen((orig) => !orig);
              }}
            >
              <div
                className="absolute top-0 right-0 bottom-0 flex w-1/2
                  items-center"
              >
                <MotionIconChevronLeft
                  animate={{
                    rotateY: open ? 0 : 180,
                  }}
                  className=""
                  transition={{
                    duration: 0.2,
                  }}
                  size={isXL ? 36 : 24}
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Sizing placeholder for desktop */}
      <motion.div
        className="hidden lg:block lg:min-h-[30rem] xl:min-h-[34rem]"
        suppressHydrationWarning={true}
        initial={{
          width: "0rem",
        }}
        animate={{
          width:
            open && globalState.onLanding ? (isXL ? "21rem" : "16rem") : "0rem",
        }}
        transition={transitionDefault}
      ></motion.div>

      {/* Open-close button: mobile */}
      {globalState.onLanding && (
        <div
          className="absolute top-4 right-2 z-10 cursor-pointer p-4 lg:hidden"
        >
          <MotionImage
            animate={{
              rotate: open ? 90 : 0,
            }}
            className="w-6 transition-colors duration-200"
            src={HamburgerBlack}
            alt="Menu"
            onClick={() => {
              setOpen((orig) => !orig);
            }}
          />
        </div>
      )}

      {/* Return home button */}
      {!globalState.onLanding && (
        <Link
          className="absolute top-20 left-0 z-10 grid -translate-x-1/2
            cursor-pointer grid-rows-2 rounded-full bg-white px-6 py-2
            shadow-lg"
          style={{ writingMode: "vertical-lr" }}
          href="/"
        >
          <div className="row-start-2">Return to Home</div>
        </Link>
      )}
    </>
  );
}
