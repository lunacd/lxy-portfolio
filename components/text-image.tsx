import Image, { StaticImageData } from "next/image";
import React from "react";

interface TextImageProps {
  title: string;
  content: string[];
  image: string | StaticImageData;
  width: number;
  height: number;
}

const TextImage: React.FC<TextImageProps> = (props) => {
  return (
    <div className="single mx-spacing-lg mb-spacing-3lg flex flex-row space-x-spacing">
      <div className="half flex flex-col justify-end">
        <div className="title mb-24">{props.title}</div>
        <div className="paragraph">
          {props.content.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <div className="relative half">
        <Image
          src={props.image}
          alt={props.title}
          layout="responsive"
          width={props.width}
          height={props.height}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default TextImage;
