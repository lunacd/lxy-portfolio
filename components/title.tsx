import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return <div className="title single mx-spacing-lg mb-24">{props.title}</div>;
};

export default Title;
