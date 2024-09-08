import React from "react";

interface TextSectionProps {
  titleClass?: string;
  title?: string;
  content: string[];
}

export default function TextSection(props: TextSectionProps) {
  return (
    <>
      {props.title && (
        <div className={`${props.titleClass} mb-spacing-lg`}>{props.title}</div>
      )}
      <div className="paragraph">
        {props.content.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </>
  );
}
