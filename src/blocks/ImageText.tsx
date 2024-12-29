import FloatUpMotion from "@/components/FloatUpMotion";
import LegacyAnimatable, { AnimationData } from "@/components/LegacyAnimatable";
import TextSection, {
  TextContent,
  createPlainContent,
} from "@/components/TextSection";

interface ImageTextProps {
  content: string[];
  source: AnimationData;
  alt: string;
  frame?: number;
  title?: string;
  titleClass?: "title" | "subtitle" | "paragraph";
}

interface RichImageTextProps {
  content: TextContent[];
  source: AnimationData;
  alt: string;
  frame?: number;
  title?: string;
  titleClass?: "title" | "subtitle" | "paragraph";
}

const defaultProps = {
  titleClass: "title",
};

export function RichImageText(propsIn: RichImageTextProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <FloatUpMotion>
      <div
        className="mx-spacing-lg mb-spacing-3lg grid w-single grid-cols-1 gap-spacing
          md:grid-cols-3"
      >
        <div className="md:col-span-2">
          <LegacyAnimatable
            source={props.source}
            frame={props.frame}
            alt={props.alt}
          />
        </div>
        <div className="flex flex-col justify-end">
          <TextSection
            content={props.content}
            title={props.title}
            titleClass={props.titleClass}
          />
        </div>
      </div>
    </FloatUpMotion>
  );
}

export default function ImageText(props: ImageTextProps) {
  return (
    <RichImageText {...props} content={createPlainContent(props.content)} />
  );
}
