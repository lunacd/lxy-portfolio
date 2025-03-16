import Image, { StaticImageData } from "next/image";

import FloatUpMotion from "@/components/FloatUpMotion";
import LegacyEqualSplit from "@/components/LegacyEqualSplit";
import LegacyTextSection, {
  TextContent,
  createPlainContent,
} from "@/components/LegacyTextSection";

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
        <LegacyEqualSplit>
          <div className="flex h-full flex-col justify-center">
            <LegacyTextSection
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
              unoptimized
            />
          </div>
        </LegacyEqualSplit>
      </FloatUpMotion>
    </div>
  );
}

export default function LegacyTextImage(props: TextImageProps) {
  return (
    <RichTextImage
      {...props}
      content={props.content ? createPlainContent(props.content) : undefined}
    />
  );
}
