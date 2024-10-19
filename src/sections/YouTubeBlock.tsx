import { ProjectPage } from "@payload-types";
import classNames from "classnames";

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
      style={{ aspectRatio: `${props.width} / ${props.height}` }}
      className={classNames("w-full", {
        "mb-spacing-3lg": props.bottomMargin,
      })}
    ></iframe>
  );
}
