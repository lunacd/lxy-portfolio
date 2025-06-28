import InteractiveImageItem from "./InteractiveImageItem";
import PayloadImage from "./PayloadImage";
import { RichTextContent } from "./Text";
import { Media } from "@payload-types";
import { Payload } from "payload";

import { TextColor } from "@/utils/CommonTypes";

interface InteractiveImageItem {
  left: number;
  top: number;
  text: RichTextContent;
  textPosition: "left" | "right" | "top" | "bottom";
  maxTextWidth: number;
}
interface InteractiveImageProps {
  media: Media | number;
  sizes: string;
  payload: Payload;
  interactiveBlocks: InteractiveImageItem[];
  backgroundColor: string;
  textColor: TextColor;
  style?: React.CSSProperties;
}

export default function InteractiveImage(props: InteractiveImageProps) {
  return (
    <div className="relative w-full" style={props.style}>
      <PayloadImage
        media={props.media}
        sizes={props.sizes}
        payload={props.payload}
      ></PayloadImage>
      {props.interactiveBlocks.map((block, index) => (
        <InteractiveImageItem
          {...block}
          backgroundColor={props.backgroundColor}
          textColor={props.textColor}
          key={index}
        ></InteractiveImageItem>
      ))}
    </div>
  );
}
