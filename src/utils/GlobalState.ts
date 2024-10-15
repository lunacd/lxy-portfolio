import { projects } from "@/utils/projectData";

export function getInitialState(pathname: string): GlobalState {
  let currentProjectIndex: number;
  let currentProject: string;
  if (isProject(pathname)) {
    currentProject = getProjectNameFromPathname(pathname);
    currentProjectIndex = projects.indexOf(currentProject);
  } else {
    currentProject = "";
    currentProjectIndex = 0;
  }
  return {
    currentProjectIndex: currentProjectIndex,
    currentProject: currentProject,
  };
}

export type GlobalStateAction = {
  type: "setInView";
  project: string;
};

export interface GlobalState {
  currentProjectIndex: number;
  currentProject: string;
}

function getProjectNameFromPathname(pathname: string) {
  return pathname.replaceAll("/", "");
}

function isProject(link: string): boolean {
  if (!link.startsWith("/")) {
    return false;
  }
  const projectName = getProjectNameFromPathname(link);
  return projects.includes(projectName);
}

export function stateReducer(state: GlobalState, action: GlobalStateAction) {
  const newState = { ...state };
  if (action.type === "setInView") {
    newState.currentProjectIndex = projects.indexOf(action.project);
    newState.currentProject = action.project;
  }
  return newState;
}
