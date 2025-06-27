import classNames from "classnames";

import Text, { RichTextContent } from "@/components/Text";

interface EmphasisTextProps {
  emphasis: string;
  text: RichTextContent;
  className?: string;
  style?: React.CSSProperties;
}

export default function EmphasisText(props: EmphasisTextProps) {
  return (
    <div
      className={classNames(props.className, "flex flex-row gap-4")}
      style={props.style}
    >
      <div className="self-center text-6xl">{props.emphasis}</div>
      <Text text={props.text} className="grow self-center" />
    </div>
  );
}
