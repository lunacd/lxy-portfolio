"use client";

import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef } from "react";

import { useGlobalStateContext } from "@/utils/GlobalStateContext";

interface InViewDetectorProps {
  detectorKey: string;
  className?: string;
}

export default function InViewDetector(
  props: PropsWithChildren<InViewDetectorProps>,
) {
  const { dispatch } = useGlobalStateContext();
  const centerRef = useRef(null);
  const inView = useInView(centerRef);
  useEffect(() => {
    if (inView) {
      dispatch({
        type: "setInView",
        project: props.detectorKey,
      });
    }
  }, [dispatch, inView, props.detectorKey]);
  return (
    <div className={classNames("relative", props.className)}>
      <div className="absolute left-1/2 top-1/2 h-1 w-1" ref={centerRef}></div>
      {props.children}
    </div>
  );
}
