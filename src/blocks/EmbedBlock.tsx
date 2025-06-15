import { ProjectPage } from "@payload-types";

import { getSpacing } from "@/utils/spacingUtil";

type YouTubeBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "embed" }
>;

export default function YouTubeBlock(props: YouTubeBlockProps) {
  return (
    <iframe
      src={props.embedLink}
      title="Embedded content"
      allowFullScreen
      className="w-full"
      style={{
        aspectRatio: `${props.width} / ${props.height}`,
        marginBottom: getSpacing(props.bottomMargin),
      }}
    ></iframe>
  );
}
