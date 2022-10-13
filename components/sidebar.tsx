import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import styles from "../styles/Sidebar.module.css";
import { projects } from "../utils/project-data";
import Route from "../utils/route";
import { transitionFast as transitionDefault } from "../utils/transition";

const routes = [
  new Route("about", "About", "/about", "subtitle"),
  new Route("projects", "Projects", "/projects", "subtitle"),
  new Route("overlap", "Overlap", "/overlap", "paragraph"),
  new Route("sunrise", "Sunrise Speaker", "/sunrise", "paragraph"),
  new Route("soul", "Soul", "/soul", "paragraph"),
  new Route("m-tron", "M-Tron", "/m-tron", "paragraph"),
  new Route("lyu", "Lyu", "/lyu", "paragraph"),
  new Route("refugia", "Refugia", "/refugia", "paragraph"),
];

interface SidebarProps {
  route: string;
  hoverEnter: (project: string) => void;
  hoverLeave: () => void;
  onLink: (link: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [open, setOpen] = useState(true);
  const isXL = useMediaQuery("(min-width: 1280px)");
  const [hovered, setHovered] = useState("");

  return (
    <>
      <motion.div
        suppressHydrationWarning={true}
        initial={{
          width: isXL ? "21rem" : "16rem",
        }}
        animate={{
          width: open ? (isXL ? "21rem" : "16rem") : "0rem",
        }}
        transition={transitionDefault}
        className={classNames(
          "relative h-screen min-h-[30rem] flex-shrink-0 bg-white shadow-lg xl:min-h-[34rem] z-10",
        )}
      >
        <div className="absolute top-0 right-14 flex h-full w-36 flex-col justify-between py-16 xl:right-24">
          <Link href="/">
            <div className="w-full">
              <Image
                src="/logo.svg"
                alt="Shirley Lyu Logo"
                className="cursor-pointer"
                layout="responsive"
                height={75}
                width={167}
              />
            </div>
          </Link>
          <div className="flex flex-col space-y-1">
            {routes.map((route) => (
              <div key={route.uri} className="flex flex-row">
                <div
                  className="flex flex-row items-center"
                  onMouseEnter={
                    projects.includes(route.uri)
                      ? () => {
                          setHovered(route.uri);
                          props.hoverEnter(route.uri);
                        }
                      : () => {}
                  }
                  onMouseLeave={
                    projects.includes(route.uri)
                      ? () => {
                          setHovered("");
                          props.hoverLeave();
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
                        hovered === route.uri || props.route === route.uri
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
                        hovered === route.uri || props.route === route.uri
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
                          props.onLink(route.link);
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

            <a
              className="subtitle"
              href="https://shirleylyu.wixsite.com/shirley-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              More Work
            </a>
          </div>
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
        <div className="absolute top-20 -right-16 z-20 h-24 w-16 overflow-hidden xl:-right-20 xl:w-20">
          <div
            className="absolute top-0 -left-8 flex h-16 w-16 cursor-pointer items-center rounded-full bg-white shadow-lg xl:-left-10 xl:h-20 xl:w-20"
            onClick={() => {
              setOpen((orig) => !orig);
            }}
          >
            <i
              className={classNames(
                "fa-solid fa-angle-left relative left-9 transition-transform duration-200 ease-in-out xl:left-12",
                {
                  [styles.angleIcon]: true,
                  [styles.rotate]: !open,
                },
              )}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
