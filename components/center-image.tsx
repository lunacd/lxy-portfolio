import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import { transitionSlow } from "../utils/transition";

interface CenterImageProps {
  image: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  botSpacing?: boolean;
}

const defaultProps = {
  botSpacing: true,
};

const CenterImage: React.FC<CenterImageProps> = (propsIn) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const props = { ...defaultProps, ...propsIn };
  return (
    <motion.div
      className={classNames("single", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
      })}
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      <Image
        src={props.image}
        alt={props.alt}
        layout="responsive"
        width={props.width}
        height={props.height}
        placeholder="blur"
      />
    </motion.div>
  );
};

export default CenterImage;
