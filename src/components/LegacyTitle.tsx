import FloatUpMotion from "@/components/FloatUpMotion";

interface TitleProps {
  title: string;
  textColor?: string;
  titleClass?: string;
}

const defaultProps = {
  titleClass: "title",
  textColor: "text-black",
};

export default function LegacyTitle(propsIn: TitleProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <FloatUpMotion>
      <div
        className={`${props.titleClass} single mx-spacing-lg mb-spacing-lg ${props.textColor}`}
      >
        {props.title}
      </div>
    </FloatUpMotion>
  );
}

export function LegacySubtitle(props: TitleProps) {
  return LegacyTitle({ ...props, titleClass: "subtitle" });
}
