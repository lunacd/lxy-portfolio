import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import GalleryItem from "../utils/gallery-item";
import { transitionSlow } from "../utils/transition";

interface SmallGalleryProps {
  items: GalleryItem[];
  width: number;
  height: number;
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

const SmallGallery: React.FC<SmallGalleryProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={`single paragraph mx-spacing-lg mb-spacing-3lg grid grid-cols-3 gap-y-spacing gap-x-8 ${props.textColor}`}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      {props.items.map((item, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-full">
            <Image
              src={item.image}
              alt={item.title}
              width={props.width}
              height={props.height}
              placeholder="blur"
            />
          </div>
          <div className="subtitle mt-2">{item.title}</div>
        </div>
      ))}
    </motion.div>
  );
};

export default SmallGallery;
