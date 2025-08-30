function removeLeadingSection(pathname: string): string {
  return "/" + pathname.split("/").slice(2).join("/");
}

export function getInitialState({
  rawPathname,
  projectRoutes,
}: {
  rawPathname: string;
  projectRoutes: {
    name: string;
    uri: string;
  }[];
}): GlobalState {
  const pathname = removeLeadingSection(rawPathname);
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
    onLanding: pathname.split("/").length <= 2,
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
    const pathname = removeLeadingSection(action.newPath);
    newState.focus = getFocus(pathname);
    newState.currentProject = pathname.slice(1, pathname.length - 1);
    if (pathname === "/") {
      newState.onLanding = true;
    } else {
      newState.onLanding = false;
    }
  }
  return newState;
}
