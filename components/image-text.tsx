import Animatable from "./animatable";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import Animation from "../utils/animation";
import ImageData from "../utils/image-data";
import { transitionSlow } from "../utils/transition";

interface ImageTextProps {
  title: string;
  content: string[];
  source: ImageData | Animation;
  frame?: number;
}

const ImageText: React.FC<ImageTextProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="single mx-spacing-lg mb-spacing-3lg flex flex-row space-x-spacing"
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <div className="two-thirds">
        <Animatable source={props.source} frame={props.frame} />
      </div>
      <div className="one-third flex flex-col justify-end">
        <div className="paragraph text-right">
          {props.content.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageText;
