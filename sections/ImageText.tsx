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
        className="mx-spacing-lg mb-spacing-3lg flex w-single flex-col-reverse gap-spacing
          md:flex-row"
      >
        <div className="w-full md:w-two-thirds">
          <Animatable
            source={props.source}
            frame={props.frame}
            alt={props.alt}
          />
        </div>
        <div className="md:w-one-third flex w-full flex-col justify-end">
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
