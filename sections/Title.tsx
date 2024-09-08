import FloatUpMotion from "@/components/FloatUpMotion";

interface TitleProps {
  title: string;
  textColor?: string;
}

const defaultProps = {
  textColor: "text-black",
};

export default function Title(propsIn: TitleProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <FloatUpMotion>
      <div
        className={`title single mx-spacing-lg mb-spacing-lg ${props.textColor}`}
      >
        {props.title}
      </div>
    </FloatUpMotion>
  );
}
