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
        (child: TextChildProps, index): ReactNode => (
          <TextChild {...child} key={index}></TextChild>
        ),
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
      return (
        <span
          className={classNames({
            "font-bold": props.format === "bold",
            italic: props.format === "italic",
          })}
        >
          {props.text as string}
        </span>
      );
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
  return (
    <div
      className={classNames({
        "mb-spacing-3lg": props.bottomMargin,
        "text-white": props.textColor === "light",
        "text-black": props.textColor === "dark",
      })}
    >
      {props.text.root.children.map((child, index) => (
        <Fragment key={index}>
          <div
            className={classNames({
              paragraph: child.type === "paragraph" || child.type === "list",
              title: child.type === "heading" && child.tag === "h1",
              subtitle: child.type === "heading" && child.tag === "h2",
              subsubtitle: child.type === "heading" && child.tag === "h3",
              "text-left": child.format === "left",
              "text-right": child.format === "right",
              "text-center": child.format === "center",
            })}
            style={{ minHeight: "1em" }}
          >
            <TextChild {...child} />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
