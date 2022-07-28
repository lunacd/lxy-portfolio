import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import { transitionSlow } from "../utils/transition";

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="subtitle single mx-spacing-lg mb-8"
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      {props.subtitle}
    </motion.div>
  );
};

export default Subtitle;
