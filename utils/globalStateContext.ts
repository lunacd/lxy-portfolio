import { projects } from "./project-data";
import { GlobalState, GlobalStateAction } from "@/utils/globalState";
import { Dispatch, createContext, useContext } from "react";

const defaultState = {
  currentProjectIndex: 0,
  currentProject: projects[0],
  projectRolling: false,
  displayAnimation: false,
  swipeAnimation: false,
  route: "",
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
