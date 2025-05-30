import { motion, useInView } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

import GalleryItem from "@/utils/GalleryItem";
import { transitionSlow } from "@/utils/transitions";

interface SmallGalleryProps {
  items: GalleryItem[];
  width: number;
  height: number;
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

const LegacySmallGallery: React.FC<SmallGalleryProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className={`single paragraph mx-spacing-lg mb-spacing-3lg gap-y-spacing grid grid-cols-2
        gap-x-8 md:grid-cols-3 ${props.textColor}`}
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
              unoptimized
            />
          </div>
          <div className="subtitle mt-2 text-center">{item.title}</div>
        </div>
      ))}
    </motion.div>
  );
};

export default LegacySmallGallery;
