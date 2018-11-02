import * as React from "react";

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;

  state: any;

  onStuff(valu: string): any;
}

const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;
