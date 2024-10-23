import { ProjectPage } from "@payload-types";
import classNames from "classnames";
import { Fragment, ReactNode } from "react";

type TextChildProps = Extract<
  ProjectPage["blocks"][0],
  { blockType: "text" }
>["text"]["root"]["children"][number];

function TextChild(props: TextChildProps) {
  const children = props.children
    ? (props.children as TextChildProps[]).map(
        (child: TextChildProps): ReactNode => TextChild(child),
      )
    : [];
  switch (props.type) {
    case "list":
      if (props.tag === "ul") {
        return <ul>{children}</ul>;
      } else if (props.tag === "ol") {
        return <ol>{children}</ol>;
      }
      return <>ERROR</>;
    case "text":
      return <>{props.text}</>;
    case "listitem":
      return <li>{children}</li>;
    case "link":
      return (
        <a
          href={(props.fields as { url: string }).url}
          className="text-blue-500 underline"
        >
          {children}
        </a>
      );
    default:
      return <>{children}</>;
  }
}

type TitleBlockProps = Extract<ProjectPage["blocks"][0], { blockType: "text" }>;

export default function TextBlock(props: TitleBlockProps) {
  console.log(props);
  return (
    <div
      className={classNames({
        "mb-spacing-3lg": props.bottomMargin,
      })}
    >
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
