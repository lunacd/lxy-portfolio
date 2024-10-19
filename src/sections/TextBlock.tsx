import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Fragment } from "react";

type TitleBlockProps = Extract<ProjectPage["blocks"][0], { blockType: "text" }>;

export default function TextBlock(props: TitleBlockProps) {
  return (
    <div>
      {props.text.root.children.map((child, index) => (
        <Fragment key={index}>
          <div
            className={classNames({
              paragraph: child.type === "paragraph",
              title: child.type === "heading" && child.tag === "h1",
              subtitle: child.type === "heading" && child.tag === "h2",
              "text-left": child.format === "left",
              "text-right": child.format === "right",
              "text-center": child.format === "center",
            })}
          >
            {(child.children as any[]).map((textNode) => textNode.text)}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
