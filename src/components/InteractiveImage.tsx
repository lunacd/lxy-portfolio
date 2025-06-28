import InteractiveImageBlock, {
  InteractiveImageBlockProps,
} from "./InteractiveImageBlock";
import PayloadImage from "./PayloadImage";
import { Media } from "@payload-types";
import { Payload } from "payload";

interface InteractiveImageProps {
  media: Media | number;
  sizes: string;
  payload: Payload;
  interactiveBlocks: InteractiveImageBlockProps[];
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
        <InteractiveImageBlock {...block} key={index}></InteractiveImageBlock>
      ))}
    </div>
  );
}
