import { projects } from "./projectData";
import { Dispatch, createContext, useContext } from "react";

import { GlobalState, GlobalStateAction } from "@/utils/GlobalState";

const defaultState = {
  currentProjectIndex: 0,
  currentProject: projects[0],
  displayAnimation: false,
  swipeAnimation: false,
  route: "",
  projectsInView: new Array(projects.length).fill(false),
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
