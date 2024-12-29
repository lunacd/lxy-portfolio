export function getInitialState({
  pathname,
  projectNames,
}: {
  pathname: string;
  projectNames: string[];
}): GlobalState {
  let currentProjectIndex: number;
  let currentProject: string;
  if (isProject(pathname, projectNames)) {
    currentProject = getProjectNameFromPathname(pathname);
    currentProjectIndex = projectNames.indexOf(currentProject);
  } else {
    currentProject = "";
    currentProjectIndex = 0;
  }
  return {
    currentProjectIndex: currentProjectIndex,
    currentProject: currentProject,
    projectNames: projectNames,
    focus: getFocus(pathname),
  };
}

export type GlobalStateAction =
  | {
      type: "setInView";
      project: string;
    }
  | {
      type: "changeRoute";
      newPath: string;
    };

export interface GlobalState {
  currentProjectIndex: number;
  currentProject: string;
  projectNames: string[];
  focus?: string;
}

function getProjectNameFromPathname(pathname: string) {
  return pathname.replaceAll("/", "");
}

function isProject(link: string, projectNames: string[]): boolean {
  if (!link.startsWith("/")) {
    return false;
  }
  const projectName = getProjectNameFromPathname(link);
  return projectNames.includes(projectName);
}

export function getFocus(link: string): string | undefined {
  if (!link.startsWith("/focus")) {
    return undefined;
  }
  return link.slice(7, link.length - 1);
}

export function stateReducer(state: GlobalState, action: GlobalStateAction) {
  const newState = { ...state };
  if (action.type === "setInView") {
    newState.currentProjectIndex = state.projectNames.indexOf(action.project);
    newState.currentProject = action.project;
  } else if (action.type === "changeRoute") {
    newState.focus = getFocus(action.newPath);
    newState.currentProject = action.newPath.slice(
      1,
      action.newPath.length - 1,
    );
  }
  return newState;
}
