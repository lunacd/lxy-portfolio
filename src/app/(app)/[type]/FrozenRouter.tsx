import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { PropsWithChildren, useContext, useRef } from "react";

export default function FrozenRouter(props: PropsWithChildren) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}
