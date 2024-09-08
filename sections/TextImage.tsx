import Image, { StaticImageData } from "next/image";

import EqualSplit from "@/components/EqualSplit";
import FloatUpMotion from "@/components/FloatUpMotion";
import TextSection, {
  TextContentType,
  createPlainContent,
} from "@/components/TextSection";

interface TextImageProps {
  title: string;
  content: string[];
  image: string | StaticImageData;
  width: number;
  height: number;
  titleClass?: "title" | "subtitle" | "paragraph";
  textColor?: string;
}

const defaultProps = {
  titleClass: "title",
  textColor: "text-black",
};

export default function TextImage(propsIn: TextImageProps) {
  const props = { ...defaultProps, ...propsIn };
  const content = createPlainContent(props.content);
  return (
    <div className={`mx-spacing-lg mb-spacing-3lg ${props.textColor}`}>
      <FloatUpMotion>
        <EqualSplit>
          <div className="flex flex-col justify-end">
            <TextSection
              titleClass={props.titleClass}
              title={props.title}
              content={content}
            />
          </div>
          <div className="relative">
            <Image
              src={props.image}
              alt={props.title}
              width={props.width}
              height={props.height}
              placeholder="blur"
            />
          </div>
        </EqualSplit>
      </FloatUpMotion>
    </div>
  );
}
