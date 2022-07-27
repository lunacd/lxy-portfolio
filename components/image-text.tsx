import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageTextProps {
  title: string;
  content: string[];
  image: string | StaticImageData;
  width: number;
  height: number;
}

const ImageText: React.FC<ImageTextProps> = (props) => {
  return (
    <div className="single mx-spacing-lg mb-spacing-3lg flex flex-row space-x-spacing">
      <div className="two-thirds">
        <Image
          src={props.image}
          alt={props.title}
          layout="responsive"
          width={props.width}
          height={props.height}
          placeholder="blur"
        />
      </div>
      <div className="one-third flex flex-col justify-end">
        <div className="paragraph text-right">
          {props.content.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageText;
