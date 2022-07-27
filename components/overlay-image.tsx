import Image, { StaticImageData } from "next/image";
import React from "react";

interface OverlayImageProps {
  title: string;
  content: string;
  image: string | StaticImageData;
  width: number;
  height: number;
}

const OverlayImage: React.FC<OverlayImageProps> = (props) => {
  return (
    <div className="single relative mx-spacing-lg mb-spacing-3lg">
      <Image
        src={props.image}
        alt={props.title}
        className="w-full"
        layout="responsive"
        width={props.width}
        height={props.height}
        placeholder="blur"
      />
      <div className="absolute left-0 right-2/3 top-0 bottom-2/3 pr-4">
        <div className="subtitle">{props.title}</div>
        <div className="paragraph">{props.content}</div>
      </div>
    </div>
  );
};

export default OverlayImage;
