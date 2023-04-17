import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import { transitionSlow } from "../utils/transition";

import styles from "../styles/TextImage.module.css"

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
      className={`${styles.container} ${props.textColor}`}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div className="w-full md:w-half flex flex-col justify-end">
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
