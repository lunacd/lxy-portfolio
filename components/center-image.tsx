import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CenterImageProps {
  image: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  botSpacing?: boolean;
}

const defaultProps = {
  botSpacing: true,
};

const CenterImage: React.FC<CenterImageProps> = (propsIn) => {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={classNames("single", {
        "mb-spacing-3lg": props.botSpacing,
        "mb-spacing": !props.botSpacing,
      })}
    >
      <Image
        src={props.image}
        alt={props.alt}
        layout="responsive"
        width={props.width}
        height={props.height}
        placeholder="blur"
      />
    </div>
  );
};

export default CenterImage;
