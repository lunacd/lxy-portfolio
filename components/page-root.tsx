import React, { PropsWithChildren } from "react";

const PageRoot: React.FC<PropsWithChildren<{}>> = (props) => {
  return <div className="flex flex-row">{props.children}</div>;
};

export default PageRoot;
