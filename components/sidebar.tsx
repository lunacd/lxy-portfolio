import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import styles from "../styles/Sidebar.module.css";
import { projects } from "../utils/project-data";
import { sidebarRoutes } from "../utils/project-data";
import { transitionFast as transitionDefault } from "../utils/transition";

interface SidebarProps {
  route: string;
  hoverEnter: (project: string) => void;
  hoverLeave: () => void;
  onLink: (link: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const isXL = useMediaQuery("(min-width: 1280px)");
  const isLG = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(isLG);
  const [hovered, setHovered] = useState("");

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
        className={styles.mainContainer}
      >
        {/* Content container */}
        <div className={styles.contentContainer}>
          {/* Logo */}
          <Link href="/">
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
          <div className={styles.routeContainer}>
            {sidebarRoutes.map((route) => (
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
        <div className={styles.angleIconContainer}>
          <div
            className={styles.angleIconBackground}
            onClick={() => {
              setOpen((orig) => !orig);
            }}
          >
            <motion.i
              animate={{
                rotateY: open ? "0" : "180deg",
              }}
              className={classNames(
                `fa-solid fa-angle-left ${styles.angleIcon}`,
              )}
              transition={{
                duration: 0.2,
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Sizing placeholder for desktop */}
      <motion.div
        className="hidden lg:block"
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
      <motion.i
        animate={{
          rotate: open ? "90deg" : "0",
        }}
        className={`fa-solid fa-bars ${styles.hamburgerIcon}`}
        onClick={() => {
          setOpen((orig) => !orig);
        }}
      ></motion.i>
    </>
  );
};
