import PayloadImage from "./PayloadImage";
import SlideShowAnimation from "./SlideShowAnimation";
import { Media } from "@payload-types";
import classNames from "classnames";
import { Payload } from "payload";
import { CSSProperties } from "react";

interface SlideShowProps {
  images: (Media | number)[];
  payload: Payload;
  style?: CSSProperties | undefined;
  className?: string | undefined;
  sizes?: string | undefined;
  fill?: boolean | undefined;
}

export default async function SlideShow(props: SlideShowProps) {
  if (props.images.length === 0) {
    return <></>;
  }
  return (
    <>
      <SlideShowAnimation style={props.style} className={props.className}>
        {props.images.map((image, index) => (
          <PayloadImage
            payload={props.payload}
            sizes={props.sizes ? props.sizes : "100vw"}
            media={image}
            fill={props.fill}
            className={classNames("h-full w-full", {
              "absolute top-0 left-0": index > 0,
            })}
            key={index}
          />
        ))}
      </SlideShowAnimation>
    </>
  );
}
