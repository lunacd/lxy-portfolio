"use client";

import Text, { RichTextContent } from "./Text";
import { IconPlus } from "@tabler/icons-react";
import classNames from "classnames";
import { motion } from "motion/react";
import { useState } from "react";

export interface InteractiveImageBlockProps {
  left: number;
  top: number;
  text: RichTextContent;
  textPosition: "left" | "right" | "top" | "bottom";
  maxTextWidth: number;
}

export default function InteractiveImageBlock(
  props: InteractiveImageBlockProps,
) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${props.left}%`, top: `${props.top}%` }}
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <div
          className="h-full w-full cursor-pointer rounded-full bg-white shadow select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconPlus/>
        </div>
      </motion.div>
      <motion.div
        className={classNames("absolute rounded bg-white p-4 shadow", {
          "ml-4 translate-x-3 -translate-y-3": props.textPosition === "right",
          hidden: !isOpen,
        })}
        style={{
          maxWidth: `${props.maxTextWidth}%`,
          // Adjust for half of icon width and 1rem of padding
          left: `${props.left}%`,
          top: `${props.top}%`,
        }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
      >
        <Text text={props.text}></Text>
      </motion.div>
    </>
  );
}
