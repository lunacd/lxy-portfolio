function removeLeadingSection(pathname: string): string {
  return "/" + pathname.split("/").slice(2).join("/");
}

export function getInitialState({
  rawPathname,
  projectNames,
}: {
  rawPathname: string;
  projectNames: string[];
}): GlobalState {
  const pathname = removeLeadingSection(rawPathname);
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
  onLanding: boolean;
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

export function stateReducer(state: GlobalState, action: GlobalStateAction) {
  const newState = { ...state };
  if (action.type === "setInView") {
    newState.currentProjectIndex = state.projectNames.indexOf(action.project);
    newState.currentProject = action.project;
  } else if (action.type === "changeRoute") {
    const pathname = removeLeadingSection(action.newPath);
    newState.currentProject = pathname.slice(1, pathname.length - 1);
    if (pathname === "/") {
      newState.onLanding = true;
    } else {
      newState.onLanding = false;
    }
  }
  return newState;
}
