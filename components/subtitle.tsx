import React from "react";

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = (props) => {
  return (
    <div className="subtitle single mx-spacing-lg mb-8">{props.subtitle}</div>
  );
};

export default Subtitle;
