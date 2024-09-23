import Image, { StaticImageData } from "next/image";

import EqualSplit from "@/components/EqualSplit";
import FloatUpMotion from "@/components/FloatUpMotion";
import TextSection, {
  TextContent,
  createPlainContent,
} from "@/components/TextSection";

interface TextImageProps {
  title: string;
  content?: string[];
  image: string | StaticImageData;
  width: number;
  height: number;
  titleClass?: "title" | "subtitle" | "paragraph";
  textColor?: string;
}

interface RichTextImageProps {
  title: string;
  content?: TextContent[];
  image: string | StaticImageData;
  width: number;
  height: number;
  titleClass?: "title" | "subtitle" | "paragraph";
  textColor?: string;
}

const defaultProps = {
  titleClass: "title",
  textColor: "text-black",
  content: [],
};

export function RichTextImage(propsIn: RichTextImageProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div className={`mx-spacing-lg mb-spacing-3lg ${props.textColor}`}>
      <FloatUpMotion>
        <EqualSplit>
          <div className="flex h-full flex-col justify-center">
            <TextSection
              titleClass={props.titleClass}
              title={props.title}
              content={props.content}
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

export default function TextImage(props: TextImageProps) {
  return (
    <RichTextImage
      {...props}
      content={props.content ? createPlainContent(props.content) : undefined}
    />
  );
}
