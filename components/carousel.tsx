import { transitionFast, transitionSlow } from "@/utils/transition";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";

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

const Carousel: React.FC<CarouselProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.div
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div
        className={`flex w-single flex-row items-center md:space-x-4 ${props.textColor}`}
      >
        <div className="relative h-full w-0 md:w-auto">
          <i
            className={classNames(
              "fa-solid fa-angle-left carousel_angle left-0 top-0",
              {
                "cursor-pointer": currentIndex !== 0,
                "opacity-0": currentIndex === 0,
              },
            )}
            onClick={() => {
              if (currentIndex > 0) setCurrentIndex((orig) => orig - 1);
            }}
          />
        </div>

        <div className="flex-grow overflow-hidden">
          <motion.div
            className="flex w-full flex-row"
            transition={transitionFast}
            initial={{
              transform: "translateX(0)",
            }}
            animate={{ transform: `translateX(-${currentIndex}00%)` }}
          >
            {props.images.map((image, index) => (
              <div className="relative w-full flex-shrink-0" key={index}>
                <Image
                  src={image}
                  alt={`${props.description} ${index}`}
                  height={props.height}
                  width={props.width}
                  placeholder="blur"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-full w-0 md:w-auto">
          <i
            className={classNames(
              "fa-solid fa-angle-right carousel_angle right-0 top-0",
              {
                "cursor-pointer": currentIndex !== props.images.length - 1,
                "opacity-0": currentIndex === props.images.length - 1,
              },
            )}
            onClick={() => {
              if (currentIndex < props.images.length - 1)
                setCurrentIndex((orig) => orig + 1);
            }}
          />
        </div>
      </div>
      <div className="single relative mb-spacing-3lg mt-4 h-3">
        <div className="absolute bottom-0 left-1/2 top-0 flex -translate-x-1/2 flex-row space-x-3">
          {props.images.map((_, index) => (
            <div
              className={`relative h-3 w-3 cursor-pointer ${props.textColor}`}
              onClick={() => {
                setCurrentIndex(index);
              }}
              key={index}
            >
              <i className="fa-regular fa-circle fa-xs absolute left-0 top-1.5" />
              <i
                className={classNames(
                  "fa-solid fa-circle fa-xs absolute left-0 top-1.5 transition-opacity duration-150",
                  {
                    "opacity-0": index !== currentIndex,
                  },
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
