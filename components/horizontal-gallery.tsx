import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import styles from "../styles/HorizontalGallery.module.css";
import GalleryItem from "../utils/gallery-item";
import { transitionSlow } from "../utils/transition";

interface HorizontalGalleryProps {
  items: GalleryItem[];
  width: number;
  height: number;
  sparse?: boolean;
  botSpacing?: boolean;
  textColor?: string;
  titleClass?: "title" | "subtitle" | "paragraph";
}

const defaultProps = {
  sparse: false,
  botSpacing: true,
  textColor: "text-black",
  titleClass: "subtitle",
};

const HorizontalGallery: React.FC<HorizontalGalleryProps> = (propsIn) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const props = { ...defaultProps, ...propsIn };
  return (
    <motion.div
      className={classNames(`${styles.container} ${props.textColor}`, {
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
        <div className={styles.itemContainer} key={index}>
          <div className="mb-2 xl:mb-6 w-half sm:w-two-thirds md:w-full flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              width={props.width}
              height={props.height}
              placeholder="blur"
            />
          </div>
          <div className="text-left md:text-center">
            {item.title !== undefined && (
              <div className={`${props.titleClass} mt-2`}>{item.title}</div>
            )}
            {item.content !== undefined &&
              item.content.map((line, index) => (
                <div className="paragraph" key={index}>
                  {line}
                </div>
              ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default HorizontalGallery;
