"use client";

import { IconX } from "@tabler/icons-react";
import classNames from "classnames";
import { motion } from "motion/react";
import Image from "next/image";

import { useGlobalStateContext } from "@/utils/GlobalStateContext";

export default function ZoomedImage() {
  const { dispatch, globalState } = useGlobalStateContext();
  return (
    <motion.div
      className={classNames({
        "fixed inset-0 bg-black/80": globalState.zoomImage !== null,
        hidden: globalState.zoomImage === null,
      })}
      animate={globalState.zoomImage ? { opacity: 1 } : { opacity: 0 }}
      onClick={() => {
        dispatch({
          type: "clearZoomImage",
        });
      }}
    >
      {globalState.zoomImage && (
        <Image
          src={globalState.zoomImage.src}
          alt={globalState.zoomImage.alt}
          width={globalState.zoomImage.width}
          height={globalState.zoomImage.height}
          className="h-full w-full object-contain"
        />
      )}
      <button
        onClick={() => {
          dispatch({
            type: "clearZoomImage",
          });
        }}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <IconX className="h-8 w-8 text-white" />
      </button>
    </motion.div>
  );
}
