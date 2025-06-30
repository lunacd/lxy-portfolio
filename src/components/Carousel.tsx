"use client";

import { useMediaQuery } from "@chakra-ui/react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircle,
  IconCircleFilled,
} from "@tabler/icons-react";
import classNames from "classnames";
import { motion } from "motion/react";
import { useState } from "react";

import { transitionFast } from "@/utils/transitions";

interface CarouselInteractiveProps {
  textColor: "light" | "dark";
  itemCount: number;
}

export default function Carousel(
  props: React.PropsWithChildren<CarouselInteractiveProps>,
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMd] = useMediaQuery(["(min-width: 768px)"], {
    ssr: true,
    fallback: [false],
  });
  return (
    <>
      <div
        className={classNames(
          "w-single flex flex-row items-center md:space-x-4",
          {
            "text-white": props.textColor === "light",
            "text-black": props.textColor === "dark",
          },
        )}
      >
        <div className="relative h-full w-0 md:w-auto">
          <IconChevronLeft
            size={isMd ? 48 : 32}
            className={classNames("carousel_angle top-0 left-0", {
              "opacity-0!": currentIndex === 0,
              "cursor-pointer": currentIndex !== 0,
            })}
            onClick={() => {
              if (currentIndex > 0) setCurrentIndex((orig) => orig - 1);
            }}
          />
        </div>

        <div className="grow overflow-hidden">
          <motion.div
            className="flex w-full flex-row"
            transition={transitionFast}
            initial={{
              transform: "translateX(0)",
            }}
            animate={{ transform: `translateX(-${currentIndex}00%)` }}
          >
            {props.children}
          </motion.div>
        </div>

        <div className="relative h-full w-0 md:w-auto">
          <IconChevronRight
            size={isMd ? 48 : 32}
            className={classNames("carousel_angle top-0 right-0", {
              "cursor-pointer": currentIndex !== props.itemCount - 1,
              "opacity-0!": currentIndex === props.itemCount - 1,
            })}
            onClick={() => {
              if (currentIndex < props.itemCount - 1)
                setCurrentIndex((orig) => orig + 1);
            }}
          />
        </div>
      </div>
      <div
        className={classNames("w-single mb-spacing-3lg relative mt-4 h-3", {
          "text-white": props.textColor === "light",
          "text-black": props.textColor === "dark",
        })}
      >
        <div
          className="absolute top-0 bottom-0 left-1/2 flex -translate-x-1/2
            flex-row space-x-3"
        >
          {[...Array(props.itemCount)].map((_, index) => (
            <div
              className={"relative h-3 w-3 cursor-pointer"}
              onClick={() => {
                setCurrentIndex(index);
              }}
              key={index}
            >
              {currentIndex === index ? (
                <IconCircle size={16} />
              ) : (
                <IconCircleFilled size={16} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
