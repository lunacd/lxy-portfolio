import React from "react";

export enum TextContentType {
  Normal,
  Subtitle,
}

interface TextContent {
  type: TextContentType;
  text: string;
}

interface TextSectionProps {
  titleClass?: string;
  title?: string;
  content: TextContent[];
}

export default function TextSection(props: TextSectionProps) {
  return (
    <>
      {props.title && (
        <div className={`${props.titleClass} mb-spacing-lg`}>{props.title}</div>
      )}
      <div className="paragraph">
        {props.content.map((content, index) => {
          switch (content.type) {
            case TextContentType.Normal:
              return <div key={index}>{content.text}</div>;
            case TextContentType.Subtitle:
              return (
                <div key={index} className="mt-2 font-semibold">
                  {content.text}
                </div>
              );
          }
        })}
      </div>
    </>
  );
}
