import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import ImageData from "../utils/image-data";
import { transitionSlow } from "../utils/transition";

interface HorizontalScrollProps {
  source: ImageData;
  alt: string;
  prompt: string;
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
      className="w-full flex flex-col items-center"
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div className={`paragraph single mb-8 ${props.textColor}`}>
        {props.prompt}
      </div>
      <div className="w-full overflow-x-scroll mb-spacing-3lg">
        <div className="w-[350%]">
          <Image
            src={props.source.src}
            alt={props.alt}
            width={props.source.width}
            height={props.source.height}
            layout="responsive"
            placeholder="blur"
            unoptimized
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HorizontalScroll;
