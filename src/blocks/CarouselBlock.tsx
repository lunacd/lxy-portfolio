import CarouselInteractive from "../components/Carousel";
import { ProjectPage } from "@payload-types";
import { Payload } from "payload";
import "server-only";

import PayloadImage from "@/components/PayloadImage";

export type CarouselBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "carousel" }
> & { payload: Payload };

export default function CarouselBlock(props: CarouselBlockProps) {
  return (
    <CarouselInteractive
      textColor={props.textColor}
      itemCount={props.items.length}
    >
      {props.items.map((item, index) => (
        <div className="relative w-full shrink-0 select-none" key={index}>
          <PayloadImage
            media={item.image}
            sizes="100vw"
            payload={props.payload}
            canZoom={props.canZoom}
          />
        </div>
      ))}
    </CarouselInteractive>
  );
}
