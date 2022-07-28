import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import { transitionSlow } from "../utils/transition";

interface ImageTextProps {
  title: string;
  content: string[];
  image: string | StaticImageData;
  width: number;
  height: number;
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
        <Image
          src={props.image}
          alt={props.title}
          layout="responsive"
          width={props.width}
          height={props.height}
          placeholder="blur"
        />
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
