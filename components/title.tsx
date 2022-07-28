import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import { transitionSlow } from "../utils/transition";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="title single mx-spacing-lg mb-24"
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      {props.title}
    </motion.div>
  );
};

export default Title;
