"use client";

import Text, { RichTextContent } from "./Text";
import { IconPlus } from "@tabler/icons-react";
import classNames from "classnames";
import { motion } from "motion/react";
import { useState } from "react";

import { TextColor } from "@/utils/CommonTypes";

export interface InteractiveImageBlockProps {
  left: number;
  top: number;
  text: RichTextContent;
  textPosition: "left" | "right" | "top" | "bottom";
  maxTextWidth: number;
  backgroundColor: string;
  textColor: TextColor;
}

export default function InteractiveImageItem(
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
          className={classNames(
            "h-full w-full cursor-pointer rounded-full shadow-lg select-none",
            {
              "text-black": props.textColor === "dark",
              "text-white": props.textColor === "light",
            },
          )}
          style={{ backgroundColor: props.backgroundColor }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconPlus />
        </div>
      </motion.div>
      <motion.div
        className={classNames("absolute rounded-xl p-4 shadow-xl", {
          "ml-4 translate-x-3 -translate-y-3": props.textPosition === "right",
          "text-black": props.textColor === "dark",
          "text-white": props.textColor === "light",
          hidden: !isOpen,
        })}
        style={{
          maxWidth: `${props.maxTextWidth}%`,
          // Adjust for half of icon width and 1rem of padding
          left: `${props.left}%`,
          top: `${props.top}%`,
          backgroundColor: props.backgroundColor,
        }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
      >
        <Text text={props.text}></Text>
      </motion.div>
    </>
  );
}
