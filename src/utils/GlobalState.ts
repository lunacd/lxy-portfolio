export function getInitialState({
  pathname,
  projectRoutes,
}: {
  pathname: string;
  projectRoutes: {
    name: string;
    uri: string;
  }[];
}): GlobalState {
  let currentProjectIndex: number;
  let currentProject: string;
  const projectNames = projectRoutes.map((route) => route.name);
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
    sideBarRoutes: projectRoutes,
    focus: getFocus(pathname),
    onLanding: pathname === "/",
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
  sideBarRoutes: {
    name: string;
    uri: string;
  }[];
  onLanding: boolean;
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
    if (action.newPath === "/") {
      newState.onLanding = true;
    } else {
      newState.onLanding = false;
    }
  }
  return newState;
}
