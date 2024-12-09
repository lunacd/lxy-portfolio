import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

import { transitionSlow } from "@/utils/transitions";

interface ParagraphProps {
  paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="paragraph single mx-spacing-lg mb-8"
      style={{ y: "3rem" }}
      animate={{ y: isInView ? "0rem" : "3rem" }}
      transition={transitionSlow}
      ref={ref}
    >
      {props.paragraph}
    </motion.div>
  );
};

export default Paragraph;
