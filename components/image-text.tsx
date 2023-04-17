import Animatable from "./animatable";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import styles from "../styles/ImageText.module.css";
import Animation from "../utils/animation";
import ImageData from "../utils/image-data";
import { transitionSlow } from "../utils/transition";

interface ImageTextProps {
  content: string[];
  source: ImageData | Animation;
  alt: string;
  frame?: number;
  title?: string;
  titleClass?: "title" | "subtitle" | "paragraph";
}

const defaultProps = {
  titleClass: "title",
};

const ImageText: React.FC<ImageTextProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={styles.container}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div className="w-full md:w-two-thirds">
        <Animatable source={props.source} frame={props.frame} alt={props.alt} />
      </div>
      <div className="w-full md:w-one-third flex flex-col justify-end">
        {props.title && (
          <div className={`${props.titleClass} mb-spacing-lg`}>
            {props.title}
          </div>
        )}
        <div className="paragraph">
          {props.content.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageText;
