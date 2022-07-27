import classNames from "classnames";
import Image from "next/image";
import React from "react";

import GalleryItem from "../utils/gallery-item";

interface HorizontalGalleryProps {
  items: GalleryItem[];
  width: number;
  height: number;
  sparse?: boolean;
  botSpacing?: boolean;
}

const defaultProps = {
  sparse: false,
  botSpacing: true,
};

const HorizontalGallery: React.FC<HorizontalGalleryProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={classNames("single grid grid-flow-col auto-cols-fr", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
        "gap-spacing-lg": props.sparse,
        "gap-spacing": !props.sparse,
      })}
    >
      {props.items.map((item, index) => (
        <div className="flex flex-col items-center w-full" key={index}>
          <div className="mb-4 xl:mb-8 w-full">
            <Image
              src={item.image}
              alt={item.title}
              layout="responsive"
              width={props.width}
              height={props.height}
              placeholder="blur"
            />
          </div>
          {item.title !== undefined && (
            <div className="subtitle text-center">{item.title}</div>
          )}
          {item.description !== undefined && (
            <div className="paragraph text-center">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HorizontalGallery;
