import classNames from "classnames";
import { motion, useInView } from "motion/react";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import { transitionSlow } from "@/utils/transitions";

interface HorizontalScrollProps {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
  prompt: string;
  xSzie: "2x" | "3.5x";
  textColor?: string;
  xSpacing?: boolean;
}

const defaultProps = {
  textColor: "text-black",
  xSpacing: false,
};

const LegacyHorizontalScroll: React.FC<HorizontalScrollProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="flex w-full flex-col items-center"
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div className={`paragraph single mb-8 ${props.textColor}`}>
        {props.prompt}
      </div>
      <div
        className={classNames("mb-spacing-3lg overflow-x-scroll", {
          "w-full": !props.xSpacing,
          "w-single": props.xSpacing,
        })}
      >
        <div
          className={classNames({
            "w-[200%]": props.xSzie === "2x",
            "w-[350%]": props.xSzie === "3.5x",
          })}
        >
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            placeholder="blur"
            unoptimized
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LegacyHorizontalScroll;
