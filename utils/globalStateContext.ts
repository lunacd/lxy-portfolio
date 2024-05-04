import {
  GlobalState,
  GlobalStateAction,
  initialState,
} from "@/utils/globalState";
import { Dispatch, createContext, useContext } from "react";

const GlobalStateContext = createContext<{
  globalState: GlobalState;
  dispatch: Dispatch<GlobalStateAction>;
}>({
  globalState: { ...initialState, swipeAnimation: true },
  dispatch: () => {},
});

export function useGlobalStateContext() {
  return useContext(GlobalStateContext);
}

export default GlobalStateContext;
