import { Dispatch, createContext, useContext } from "react";

import { GlobalState, GlobalStateAction } from "@/utils/GlobalState";

const defaultState: GlobalState = {
  currentProjectIndex: -1,
  currentProject: "",
  projectNames: [],
};

const GlobalStateContext = createContext<{
  globalState: GlobalState;
  dispatch: Dispatch<GlobalStateAction>;
}>({
  globalState: defaultState,
  dispatch: () => {},
});

export function useGlobalStateContext() {
  return useContext(GlobalStateContext);
}

export default GlobalStateContext;
