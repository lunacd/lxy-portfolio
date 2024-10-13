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
    projectsInView: new Array(projects.length).fill(false),
  };
}

export type GlobalStateAction = {
  type: "setInView";
  isInView: boolean;
  project: string;
};

export interface GlobalState {
  currentProjectIndex: number;
  currentProject: string;
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
