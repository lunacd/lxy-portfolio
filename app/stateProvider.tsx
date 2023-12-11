import { Context, Dispatch, createContext, useReducer } from "react";

interface GlobalState {
  project: string;
  rolling: boolean;
  swipeAnimation: boolean;
}

type ReducerAction =
  | {
      type:
        | "startRolling"
        | "stopRolling"
        | "enableSwipeAnimation"
        | "disableSwipeAnimation";
    }
  | {
      type: "setProject";
      project: string;
    };

function stateReducer(state: GlobalState, action: ReducerAction): GlobalState {
  switch (action.type) {
    case "setProject":
      return {
        ...state,
        project: action.project,
      };
    case "startRolling":
      return {
        ...state,
        rolling: true,
      };
    case "stopRolling":
      return {
        ...state,
        rolling: false,
      };
    case "enableSwipeAnimation":
      return {
        ...state,
        swipeAnimation: true,
      };
    case "disableSwipeAnimation":
      return {
        ...state,
        swipeAnimation: false,
      };
  }
}

const initialState: GlobalState = {
  project: "soul",
  rolling: false,
  swipeAnimation: false,
};

export const StateContext: Context<GlobalState> = createContext(initialState);
export const StateDispatchContext: Context<Dispatch<ReducerAction>> =
  createContext((_) => {});

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}
