import Image from "next/image";
import React from "react";

import GalleryItem from "../utils/gallery-item";

interface SmallGalleryProps {
  items: GalleryItem[];
  width: number;
  height: number;
}

const SmallGallery: React.FC<SmallGalleryProps> = (props) => {
  return (
    <div className="single paragraph mx-spacing-lg mb-spacing-3lg grid grid-cols-3 gap-y-spacing gap-x-8">
      {props.items.map((item, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-full">
            <Image
              src={item.image}
              alt={item.title}
              layout="responsive"
              width={props.width}
              height={props.height}
              placeholder="blur"
            />
          </div>
          <div className="subtitle mt-2">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SmallGallery;
