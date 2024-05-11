import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import { transitionSlow } from "@/utils/transitions";

interface TextImageProps {
  title: string;
  content: string[];
  image: string | StaticImageData;
  width: number;
  height: number;
  titleClass?: "title" | "subtitle" | "paragraph";
  textColor?: string;
}

const defaultProps = {
  titleClass: "title",
  textColor: "text-black",
};

const TextImage: React.FC<TextImageProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={`mx-spacing-lg mb-spacing-3lg flex w-single flex-col space-y-spacing md:flex-row
      md:space-x-spacing md:space-y-0 ${props.textColor}`}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div className="flex w-full flex-col justify-end md:w-half">
        <div className={`${props.titleClass} mb-spacing-lg`}>{props.title}</div>
        <div className="paragraph">
          {props.content.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <div className="relative w-full md:w-half">
        <Image
          src={props.image}
          alt={props.title}
          width={props.width}
          height={props.height}
          placeholder="blur"
        />
      </div>
    </motion.div>
  );
};

export default TextImage;
