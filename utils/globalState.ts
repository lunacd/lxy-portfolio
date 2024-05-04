import { projects } from "./project-data";

export const initialState: GlobalState = {
  currentProjectIndex: 0,
  currentProject: projects[0],
  projectRolling: false,
  displayAnimation: false,
  swipeAnimation: false,
};

export type GlobalStateAction =
  | {
      type: "changeRoute";
      currentRoute: string;
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
  return newState;
}
