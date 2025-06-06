"use client";

import classNames from "classnames";
import { useInView } from "motion/react";
import React, { PropsWithChildren, useEffect, useRef } from "react";

import { useGlobalStateContext } from "@/utils/GlobalStateContext";

interface InViewDetectorProps {
  detectorKey: string;
  className?: string;
  id?: string | undefined;
}

export default function InViewDetector(
  props: PropsWithChildren<InViewDetectorProps>,
) {
  const { dispatch } = useGlobalStateContext();
  const centerRef = useRef<HTMLDivElement>(null);
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
    <div className={classNames("relative", props.className)} id={props.id}>
      <div className="absolute top-1/2 left-1/2 h-1 w-1" ref={centerRef}></div>
      {props.children}
    </div>
  );
}
