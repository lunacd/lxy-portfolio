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
    route: pathname,
    projectsInView: new Array(projects.length).fill(false),
  };
}

export type GlobalStateAction =
  | {
      type: "changeRoute";
      newRoute: string;
    }
  | {
      type: "setDisplayAnimation";
      displayAnimation: boolean;
    }
  | {
      type: "setInView";
      isInView: boolean;
      project: string;
    };

export interface GlobalState {
  currentProjectIndex: number;
  currentProject: string;
  route: string;
  projectsInView: boolean[];
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
  if (action.type === "changeRoute") {
    const targetPageIsProject = isProject(action.newRoute);
    newState.route = action.newRoute;
    if (targetPageIsProject) {
      newState.currentProject = getProjectNameFromPathname(action.newRoute);
    } else {
      newState.currentProject = "";
    }
    return newState;
  }
  if (action.type === "setInView") {
    const projectIndex = projects.indexOf(action.project);
    newState.projectsInView[projectIndex] = action.isInView;
    let currentProject = "";
    let currentProjectIndex = 0;
    for (let i = 0; i < projects.length; i++) {
      if (newState.projectsInView[i]) {
        currentProject = projects[i];
        currentProjectIndex = i;
      }
    }
    if (currentProject.length > 0) {
      newState.currentProject = currentProject;
      newState.currentProjectIndex = currentProjectIndex;
    }
  }
  return newState;
}
