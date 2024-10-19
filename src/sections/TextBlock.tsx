import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Fragment } from "react";

type TextChildProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "text" }
>["text"]["root"]["children"][number];

function TextChild(props: TextChildProps) {
  const children = props.children as any[];
  switch (props.type) {
    case "list":
      const listItems = (
        <>
          {children.map((item, index) => (
            <>
              {(item.children as any[]).map((innerItem, innerIndex) => (
                <li key={`${index}.${innerIndex}`}>{innerItem.text}</li>
              ))}
            </>
          ))}
        </>
      );
      if (props.tag === "ul") {
        return <ul>{listItems}</ul>;
      } else if (props.tag === "ol") {
        return <ol>{listItems}</ol>;
      }
      return <>ERROR</>;
    default:
      return <>{children.map((textNode) => textNode.text)}</>;
  }
}

type TitleBlockProps = Extract<ProjectPage["blocks"][0], { blockType: "text" }>;

export default function TextBlock(props: TitleBlockProps) {
  return (
    <div>
      {props.text.root.children.map((child, index) => (
        <Fragment key={index}>
          <div
            className={classNames({
              paragraph: child.type === "paragraph" || child.type === "list",
              title: child.type === "heading" && child.tag === "h1",
              subtitle: child.type === "heading" && child.tag === "h2",
              "text-left": child.format === "left",
              "text-right": child.format === "right",
              "text-center": child.format === "center",
            })}
          >
            <TextChild {...child} />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
