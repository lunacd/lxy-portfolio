"use client";

import classNames from "classnames";
import { useInView } from "motion/react";
import React, { PropsWithChildren, useEffect, useRef } from "react";

import { useGlobalStateContext } from "@/utils/GlobalStateContext";

interface InViewDetectorProps {
  detectorKey: string;
  height: "short" | "tall";
  className?: string;
  id?: string | undefined;
}

/**
 * Use height = short if the element being tracked is shorter than a screen.
 * Use height = tall otherwise.
 */
export default function InViewDetector(
  props: PropsWithChildren<InViewDetectorProps>,
) {
  const { dispatch } = useGlobalStateContext();
  const ref1 = useRef<HTMLDivElement>(null);
  const inView1 = useInView(ref1);
  const ref2 = useRef<HTMLDivElement>(null);
  const inView2 = useInView(ref2);
  useEffect(() => {
    if (inView1 || inView2) {
      dispatch({
        type: "setInView",
        project: props.detectorKey,
      });
    }
  }, [dispatch, inView1, inView2, props.detectorKey]);
  return (
    <div className={classNames("relative", props.className)} id={props.id}>
      {props.height === "short" && (
        <div className="absolute top-1/2 left-1/2 h-1 w-1" ref={ref1}></div>
      )}
      {props.height === "tall" && (
        <>
          <div
            className="absolute top-[35vh] left-1/2 h-1 w-1"
            ref={ref1}
          ></div>
          <div
            className="absolute bottom-[45vh] left-1/2 h-1 w-1"
            ref={ref2}
          ></div>
        </>
      )}
      {props.children}
    </div>
  );
}
