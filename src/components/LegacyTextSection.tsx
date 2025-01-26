import classNames from "classnames";
import React from "react";

export function createPlainContent(content: string[]) {
  return content.map((text) => {
    return {
      type: TextContentType.Normal,
      text: text,
    };
  });
}

export enum TextContentType {
  Normal,
  Subtitle,
}

export interface TextContent {
  type: TextContentType;
  text: string;
}

export enum TextAlignment {
  Center,
  Left,
}

interface TextSectionProps {
  titleClass?: string;
  title?: string;
  content?: TextContent[];
  alignment?: TextAlignment;
}

const defaultProps = {
  titleClass: "title",
  alignment: TextAlignment.Left,
};

export default function LegacyTextSection(propsIn: TextSectionProps) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      {props.title && (
        <div className={`${props.titleClass} mb-spacing-lg`}>{props.title}</div>
      )}
      <div
        className={classNames({
          "text-center": props.alignment == TextAlignment.Center,
          "text-left": props.alignment == TextAlignment.Left,
        })}
      >
        {props.content &&
          props.content.map((content, index) => {
            switch (content.type) {
              case TextContentType.Normal:
                return (
                  <div key={index} className="paragraph">
                    {content.text}
                  </div>
                );
              case TextContentType.Subtitle:
                return (
                  <div key={index} className="subtitle mt-2">
                    {content.text}
                  </div>
                );
            }
          })}
      </div>
    </>
  );
}
