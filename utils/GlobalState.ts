import { projects } from "@/utils/projectData";

export function getInitialState(pathname: string): GlobalState {
  let currentProjectIndex: number;
  let currentProject: string;
  if (isProject(pathname)) {
    currentProject = getProjectNameFromPathname(pathname);
    currentProjectIndex = projects.indexOf(currentProject);
  } else {
    currentProject = projects[0];
    currentProjectIndex = 0;
  }
  return {
    currentProjectIndex: currentProjectIndex,
    currentProject: currentProject,
    projectRolling: false,
    displayAnimation: false,
    swipeAnimation: false,
    route: pathname,
  };
}

export type GlobalStateAction =
  | {
      type: "changeRoute";
      newRoute: string;
    }
  | {
      type: "nextProject";
    }
  | {
      type: "setProjectRoll";
      rolling: boolean;
    }
  | {
      type: "setProject";
      project: string;
    }
  | {
      type: "setDisplayAnimation";
      displayAnimation: boolean;
    };

export interface GlobalState {
  currentProjectIndex: number;
  currentProject: string;
  projectRolling: boolean;
  displayAnimation: boolean;
  swipeAnimation: boolean;
  route: string;
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
  if (action.type === "nextProject") {
    newState.currentProjectIndex =
      (newState.currentProjectIndex + 1) % projects.length;
    newState.currentProject = projects[newState.currentProjectIndex];
    return newState;
  }
  if (action.type === "setProjectRoll") {
    newState.projectRolling = action.rolling;
    return newState;
  }
  if (action.type === "setProject") {
    const index = projects.indexOf(action.project);
    if (index >= 0) {
      newState.currentProject = action.project;
      newState.currentProjectIndex = index;
    }
    return newState;
  }
  if (action.type === "setDisplayAnimation") {
    newState.displayAnimation = action.displayAnimation;
    return newState;
  }
  if (action.type === "changeRoute") {
    const currentPageIsProject = isProject(state.route);
    const targetPageIsProject = isProject(action.newRoute);
    if ((state.route === "/" || currentPageIsProject) && targetPageIsProject) {
      newState.swipeAnimation = false;
    } else {
      newState.swipeAnimation = true;
    }
    newState.route = action.newRoute;
  }
  return newState;
}
