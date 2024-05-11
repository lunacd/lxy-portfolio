import { transitionSlow } from "@/utils/transitions";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

interface HorizontalScrollProps {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
  prompt: string;
  xSzie: "2x" | "3.5x";
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

const HorizontalScroll: React.FC<HorizontalScrollProps> = (propsIn) => {
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
      <div className="mb-spacing-3lg w-full overflow-x-scroll">
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

export default HorizontalScroll;
