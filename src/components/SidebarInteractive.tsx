"use client";

import { useMediaQuery } from "@chakra-ui/react";
import { Project } from "@payload-types";
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
import { mainFocuses } from "@/utils/projectData";
import { transitionFast as transitionDefault } from "@/utils/transitions";

import HamburgerBlack from "@/images/hamburger-black.svg";

interface SidebarInteractiveProps {
  allProjects: Project[];
  projectsWithFocus: {
    [uri: string]: Project[];
  };
}

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

export default function SidebarInteractive({
  allProjects,
  projectsWithFocus,
}: SidebarInteractiveProps) {
  const { globalState } = useGlobalStateContext();

  const projects = globalState.focus
    ? projectsWithFocus[globalState.focus]
    : allProjects;
  const routes = projects.map((project) => {
    return {
      name: project.name,
      uri: project.uri,
    };
  });
  const prefixRoutes = [];
  const suffixRoutes = [];
  if (globalState.focus) {
    let insertRouteAfter = false;
    for (const mainFocus of Object.values(mainFocuses)) {
      const focusLink = {
        name: mainFocus.name,
        uri: `focus/${mainFocus.uri}`,
      };
      if (insertRouteAfter) {
        suffixRoutes.push(focusLink);
      } else {
        prefixRoutes.push(focusLink);
      }
      if (mainFocus.uri === globalState.focus) {
        insertRouteAfter = true;
      }
    }
  }

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
          x: open ? "0%" : "-100%",
        }}
        transition={transitionDefault}
        className="absolute z-10 h-screen w-[16rem] flex-shrink-0 bg-white shadow-lg
          lg:min-h-[30rem] xl:min-h-[34rem] xl:w-[21rem]"
      >
        {/* Content container */}
        <div className="absolute right-14 top-0 flex h-full w-36 flex-col py-16 xl:right-24">
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
              />
            </div>
          </Link>

          {/* Routes */}
          <div className="mt-16 flex flex-col space-y-1 pb-6 pt-4">
            <AnimatePresence initial={false} mode="popLayout">
              <MotionLink className="subtitle" href="/" key="allProjects">
                All Projects
              </MotionLink>
              {prefixRoutes.map((route) => (
                <MotionLink
                  href={`/${route.uri}`}
                  className="subtitle"
                  key={route.uri}
                  transition={transitionDefault}
                  layout
                >
                  {route.name}
                </MotionLink>
              ))}
              <motion.div
                key={globalState.focus ? globalState.focus : "all"}
                transition={transitionDefault}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {routes.map((route) => (
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
                      <Link
                        onClick={() => {
                          if (!isLG) {
                            setOpen(false);
                          }
                        }}
                        href={`/${route.uri}`}
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
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
              {suffixRoutes.map((route) => (
                <MotionLink
                  href={`/${route.uri}`}
                  className="subtitle"
                  key={route.uri}
                  transition={transitionDefault}
                  layout
                >
                  {route.name}
                </MotionLink>
              ))}

              <MotionLink
                className="subtitle"
                href="/about"
                transition={transitionDefault}
                layout
                key="about"
              >
                About
              </MotionLink>
              <MotionLink
                className="subtitle"
                href="/blog"
                transition={transitionDefault}
                layout
                key="blog"
              >
                Blogs
              </MotionLink>
            </AnimatePresence>
            {/*<Link className="subtitle" href="/others">*/}
            {/*  More Work*/}
            {/*</Link>*/}
          </div>

          {/* Social links */}
          <div className="mt-auto flex flex-row justify-between">
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
        <div
          className="absolute -right-16 top-20 z-20 hidden h-24 w-16 overflow-hidden lg:block
            xl:-right-20 xl:w-20"
        >
          <div
            className="absolute -left-8 top-0 h-16 w-16 cursor-pointer rounded-full bg-white shadow-lg
              xl:-left-10 xl:h-20 xl:w-20"
            onClick={() => {
              setOpen((orig) => !orig);
            }}
          >
            <div className="absolute bottom-0 right-0 top-0 flex w-1/2 items-center">
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
      </motion.div>

      {/* Sizing placeholder for desktop */}
      <motion.div
        className="hidden lg:block lg:min-h-[30rem] xl:min-h-[34rem]"
        suppressHydrationWarning={true}
        initial={{
          width: "0rem",
        }}
        animate={{
          width: open ? (isXL ? "21rem" : "16rem") : "0rem",
        }}
        transition={transitionDefault}
      ></motion.div>

      {/* Open-close button: mobile */}
      <div className="absolute right-2 top-4 z-10 cursor-pointer p-4 lg:hidden">
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
    </>
  );
}
