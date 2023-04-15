import React, { PropsWithChildren } from "react";

const PageRoot: React.FC<PropsWithChildren<{}>> = (props) => {
  return <div className="flex flex-col lg:flex-row">{props.children}</div>;
};

export default PageRoot;
