"use client";

import { useMediaQuery } from "@chakra-ui/react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconChevronLeft,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link"

import Tooltip from "@/components/Tooltip";
import { useGlobalStateContext } from "@/utils/GlobalStateContext";
import { projectsData, sidebarRoutes } from "@/utils/projectData";
import { transitionFast as transitionDefault } from "@/utils/transitions";

import HamburgerBlack from "@/images/hamburger-black.svg";
import HamburgerWhite from "@/images/hamburger-white.svg";

const MotionImage = motion.create(Image);
const MotionIconChevronLeft = motion.create(IconChevronLeft);

export const Sidebar = () => {
  const [hovered, setHovered] = useState("");

  const [isLG, isXL] = useMediaQuery([
    "(min-width: 1024px)",
    "(min-width: 1280px)",
  ]);
  const [open, setOpen] = useState(isLG);
  useEffect(() => {
    setOpen(isLG);
  }, [isLG]);

  const { globalState } = useGlobalStateContext();

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
        <div
          className="absolute right-14 top-0 flex h-full w-36 flex-col justify-between py-16
            xl:right-24"
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
              />
            </div>
          </Link>

          {/* Routes */}
          <div className="flex flex-col space-y-1 pb-6 pt-4">
            {sidebarRoutes.map((route) => (
              <div key={route.uri} className="flex flex-row">
                <div
                  className="flex flex-row items-center"
                  onMouseEnter={
                    route.uri in projectsData
                      ? () => {
                          setHovered(route.uri);
                        }
                      : undefined
                  }
                  onMouseLeave={
                    route.uri in projectsData
                      ? () => {
                          setHovered("");
                        }
                      : undefined
                  }
                >
                  <motion.div
                    className={`absolute ${route.typeClass}`}
                    transition={transitionDefault}
                    style={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity:
                        hovered === route.uri ||
                        globalState.currentProject === route.uri
                          ? 1
                          : 0,
                    }}
                  >
                    -
                  </motion.div>
                  <motion.div
                    className={route.typeClass}
                    transition={transitionDefault}
                    style={{
                      x: "0rem",
                    }}
                    animate={{
                      x:
                        hovered === route.uri ||
                        globalState.currentProject === route.uri
                          ? "0.75rem"
                          : "0rem",
                    }}
                  >
                    {route.link.startsWith("http") ? (
                      <a href={route.link} target="_blank" rel="noreferrer">
                        {route.name}
                      </a>
                    ) : (
                      <Link
                        onClick={() => {
                          if (!isLG) {
                            setOpen(false);
                          }
                        }}
                        href={route.link}
                        className="cursor-pointer"
                      >
                        {route.name}
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
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
                  rotateY: open ? "0" : "180deg",
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
            rotate: open ? "90deg" : "0",
          }}
          className="w-6 transition-colors duration-200"
          src={
            globalState.currentProject in projectsData &&
            projectsData[globalState.currentProject].hamburgerColorLight
              ? HamburgerWhite
              : HamburgerBlack
          }
          alt="Menu"
          onClick={() => {
            setOpen((orig) => !orig);
          }}
        />
      </div>
    </>
  );
};
