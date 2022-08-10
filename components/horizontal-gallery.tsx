import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import GalleryItem from "../utils/gallery-item";
import { transitionSlow } from "../utils/transition";

interface HorizontalGalleryProps {
  items: GalleryItem[];
  width: number;
  height: number;
  sparse?: boolean;
  botSpacing?: boolean;
}

const defaultProps = {
  sparse: false,
  botSpacing: true,
};

const HorizontalGallery: React.FC<HorizontalGalleryProps> = (propsIn) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const props = { ...defaultProps, ...propsIn };
  return (
    <motion.div
      className={classNames("single grid grid-flow-col auto-cols-fr", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
        "gap-spacing-lg": props.sparse,
        "gap-spacing": !props.sparse,
      })}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      {props.items.map((item, index) => (
        <div className="flex flex-col items-center w-full" key={index}>
          <div className="mb-4 xl:mb-8 w-full">
            <Image
              src={item.image}
              alt={item.title}
              layout="responsive"
              width={props.width}
              height={props.height}
              placeholder="blur"
            />
          </div>
          {item.title !== undefined && (
            <div className="subtitle text-center">{item.title}</div>
          )}
          {item.content !== undefined &&
            item.content.map((line) => (
              <div className="paragraph text-center">{line}</div>
            ))}
        </div>
      ))}
    </motion.div>
  );
};

export default HorizontalGallery;
