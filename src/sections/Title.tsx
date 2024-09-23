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

export default function Title(propsIn: TitleProps) {
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

export function Subtitle(props: TitleProps) {
  return Title({ ...props, titleClass: "subtitle" });
}
