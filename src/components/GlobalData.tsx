"use client";

import { Global } from "../payload-types";
import { PropsWithChildren, createContext } from "react";

export const GlobalDataContext = createContext<Global | undefined>(undefined);

interface GlobalDataProviderProps {
  globalData: Global;
}

export const GlobalDataProvider = (
  props: PropsWithChildren<GlobalDataProviderProps>,
) => (
  <GlobalDataContext.Provider value={props.globalData}>
    {props.children}
  </GlobalDataContext.Provider>
);
