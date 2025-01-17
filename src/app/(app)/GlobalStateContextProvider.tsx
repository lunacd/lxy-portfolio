"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useReducer } from "react";

import { getInitialState, stateReducer } from "@/utils/GlobalState";
import GlobalStateContext from "@/utils/GlobalStateContext";

interface GlobalStateContextProviderProps {
  projectNames: string[];
}

export default function GlobalStateContextProvider(
  props: PropsWithChildren<GlobalStateContextProviderProps>,
) {
  const pathname = usePathname();
  const [globalState, dispatch] = useReducer(
    stateReducer,
    { pathname: pathname, projectNames: props.projectNames },
    getInitialState,
  );
  const providerValue = {
    globalState,
    dispatch,
  };
  useEffect(() => {
    console.log("Changing route to ", pathname);
    dispatch({ type: "changeRoute", newPath: pathname });
  }, [pathname]);
  return (
    <GlobalStateContext.Provider value={providerValue}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
