import { ProjectPage } from "@payload-types";
import "server-only";

import { getSpacing } from "@/utils/spacingUtil";

type YouTubeBlockProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "youtube" }
>;

export default function YouTubeBlock(props: YouTubeBlockProps) {
  return (
    <iframe
      src={props.embedLink}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full"
      style={{
        aspectRatio: `${props.width} / ${props.height}`,
        marginBottom: getSpacing(props.bottomMargin),
      }}
    ></iframe>
  );
}
