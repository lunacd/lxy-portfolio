import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useInterval, useMediaQuery } from "usehooks-ts";

import { StateContext, StateDispatchContext } from "../app/stateProvider";
import { useNavigate } from "../app/useNavigate";
import HamburgerBlack from "../images/hamburger-black.svg";
import HamburgerWhite from "../images/hamburger-white.svg";
import { projects } from "../utils/project-data";
import { sidebarRoutes } from "../utils/project-data";
import { transitionFast as transitionDefault } from "../utils/transition";

const hamburgerColors = [
  "text-white", // soul
  "text-black", // skates
  "text-black", // overlap
  "text-black", // sunrise
  "text-white", // m-tron
  "text-black", // lyu
];

export const Sidebar: React.FC = () => {
  const globalState = useContext(StateContext);
  const dispatcher = useContext(StateDispatchContext);
  const isXL = useMediaQuery("(min-width: 1280px)");
  const isLG = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(isLG);
  const [hovered, setHovered] = useState("");
  const [swipeAnimation, setSwipeAnimation] = useState(false);
  const navigate = useNavigate();

  const [hamburgerColor, setHamburgerColor] = useState("text-black");
  const [counter, setCounter] = useState(0);
  const [interval, setInterval] = useState<number | null>(3000);
  useEffect(() => {
    setHamburgerColor(hamburgerColors[counter % hamburgerColors.length]);
  }, [counter]);
  const hoverEnter = (route: string) => {
    setInterval(null);
    setCounter(projects.indexOf(route));
  };
  const hoverLeave = () => {
    setInterval(3000);
    setCounter((orig) => (orig + 1) % projects.length);
  };
  useInterval(() => {
    setCounter((orig) => (orig + 1) % projects.length);
  }, interval);

  useEffect(() => {
    console.log(counter);
    dispatcher({ type: "setProject", project: projects[counter] });
  }, [counter, dispatcher]);

  return (
    <>
      {/* Main container */}
      <motion.div
        suppressHydrationWarning={true}
        initial={{
          x: "-100%",
        }}
        animate={{
          x: open ? "0%" : "-100%",
        }}
        transition={transitionDefault}
        exit={{ x: swipeAnimation ? "-100%" : "0%" }}
        className="absolute z-10 h-screen w-[16rem]
        flex-shrink-0 bg-white shadow-lg lg:min-h-[30rem] xl:min-h-[34rem] xl:w-[21rem]"
      >
        {/* Content container */}
        <div
          className="absolute right-14 top-0 flex h-full w-36 flex-col
        justify-between py-16 xl:right-24"
        >
          {/* Logo */}
          <div
            onClick={() => {
              if (!isLG) {
                setOpen(false);
              }
              navigate("/");
            }}
          >
            <Image
              src="/logo.svg"
              alt="Shirley Lyu Logo"
              className="cursor-pointer"
              height={75}
              width={167}
            />
          </div>

          {/* Routes */}
          <div className="flex flex-col space-y-1 pb-6 pt-4">
            {sidebarRoutes.map((route) => (
              <div key={route.uri} className="flex flex-row">
                <div
                  className="flex flex-row items-center"
                  onMouseEnter={
                    projects.includes(route.uri)
                      ? () => {
                          setHovered(route.uri);
                          hoverEnter(route.uri);
                        }
                      : () => {}
                  }
                  onMouseLeave={
                    projects.includes(route.uri)
                      ? () => {
                          setHovered("");
                          hoverLeave();
                        }
                      : () => {}
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
                        globalState.project === route.uri
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
                        globalState.project === route.uri
                          ? "0.75rem"
                          : "0rem",
                    }}
                  >
                    {route.link.startsWith("http") ? (
                      <a href={route.link} target="_blank" rel="noreferrer">
                        {route.name}
                      </a>
                    ) : (
                      <div
                        onClick={() => {
                          navigate(route.link);
                          if (!isLG) {
                            setOpen(false);
                          }
                        }}
                        className="cursor-pointer"
                      >
                        {route.name}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-row justify-between">
            <a
              href="https://www.instagram.com/lyu.shirley/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="mailto:shirley.lyu.xiaoya@gmail.com">
              <i className="fa-regular fa-envelope" />
            </a>
            <a
              href="https://www.linkedin.com/in/xiaoya-lyu-11b68419b/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <i className="fa-regular fa-file"></i>
            </a>
          </div>
        </div>

        {/* Open-close button: desktop */}
        <div
          className="absolute -right-16 top-20 z-20 hidden h-24 w-16
            overflow-hidden lg:block xl:-right-20 xl:w-20"
        >
          <div
            className="absolute -left-8 top-0 flex h-16 w-16 cursor-pointer
              items-center rounded-full bg-white shadow-lg xl:-left-10 xl:h-20
              xl:w-20"
            onClick={() => {
              setOpen((orig) => !orig);
            }}
          >
            <motion.i
              animate={{
                rotateY: open ? "0" : "180deg",
              }}
              className="fa-solid fa-angle-left relative left-9
                align-[-0.075rem] align-[-0.125rem] text-xl
                leading-[0.05rem] xl:left-12 xl:text-2xl xl:leading-[0.04167rem]"
              transition={{
                duration: 0.2,
              }}
            />
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
        <motion.img
          animate={{
            rotate: open ? "90deg" : "0",
          }}
          className="w-6 transition-colors duration-200"
          src={
            hamburgerColor[counter] === "text-black"
              ? HamburgerBlack.src
              : HamburgerWhite.src
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
