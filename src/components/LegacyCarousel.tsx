import { useMediaQuery } from "@chakra-ui/react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircle,
  IconCircleFilled,
} from "@tabler/icons-react";
import classNames from "classnames";
import { motion, useInView } from "motion/react";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";

import { transitionFast, transitionSlow } from "@/utils/transitions";

interface CarouselProps {
  images: (string | StaticImageData)[];
  description: string;
  height: number;
  width: number;
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

const LegacyCarousel: React.FC<CarouselProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMd] = useMediaQuery(["(min-width: 768px)"], {
    ssr: true,
    fallback: [false],
  });

  return (
    <motion.div
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div
        className={`w-single flex flex-row items-center md:space-x-4 ${props.textColor}`}
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
            {props.images.map((image, index) => (
              <div className="relative w-full shrink-0 select-none" key={index}>
                <Image
                  src={image}
                  alt={`${props.description} ${index}`}
                  height={props.height}
                  width={props.width}
                  placeholder="blur"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-full w-0 md:w-auto">
          <IconChevronRight
            size={isMd ? 48 : 32}
            className={classNames("carousel_angle top-0 right-0", {
              "cursor-pointer": currentIndex !== props.images.length - 1,
              "opacity-0!": currentIndex === props.images.length - 1,
            })}
            onClick={() => {
              if (currentIndex < props.images.length - 1)
                setCurrentIndex((orig) => orig + 1);
            }}
          />
        </div>
      </div>
      <div className="single mb-spacing-3lg relative mt-4 h-3">
        <div className="absolute top-0 bottom-0 left-1/2 flex -translate-x-1/2 flex-row space-x-3">
          {props.images.map((_, index) => (
            <div
              className={`relative h-3 w-3 cursor-pointer ${props.textColor}`}
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
    </motion.div>
  );
};

export default LegacyCarousel;
