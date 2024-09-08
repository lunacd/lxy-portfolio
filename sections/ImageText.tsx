import Animatable, { AnimationData } from "@/components/Animatable";
import FloatUpMotion from "@/components/FloatUpMotion";
import TextSection, { TextContentType } from "@/components/TextSection";

interface ImageTextProps {
  content: string[];
  source: AnimationData;
  alt: string;
  frame?: number;
  title?: string;
  titleClass?: "title" | "subtitle" | "paragraph";
}

const defaultProps = {
  titleClass: "title",
};

export default function ImageText(propsIn: ImageTextProps) {
  const props = { ...defaultProps, ...propsIn };
  const content = props.content.map((text) => {
    return {
      type: TextContentType.Normal,
      text: text,
    };
  });
  return (
    <FloatUpMotion>
      <div
        className="mx-spacing-lg mb-spacing-3lg grid w-single grid-cols-1 gap-spacing
          md:grid-cols-3"
      >
        <div className="md:col-span-2">
          <Animatable
            source={props.source}
            frame={props.frame}
            alt={props.alt}
          />
        </div>
        <div className="flex flex-col justify-end">
          <TextSection
            content={content}
            title={props.title}
            titleClass={props.titleClass}
          />
        </div>
      </div>
    </FloatUpMotion>
  );
}
