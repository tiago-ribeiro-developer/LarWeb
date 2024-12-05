import { createContext, ReactNode, useState } from "react";

export const LoadingContext = createContext({} as LoadingContextContextType);

export type ProviderPropsType = { children: ReactNode };
export type LoadingContextContextType = {
  inLoad: boolean;
  setLoad: (status: boolean) => void;
};

/**
 * LoadingProvider
 * @param props
 * @constructor
 */
export function LoadingProvider(props: ProviderPropsType) {
  const [inLoad, setLoad] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ inLoad, setLoad }}>
      {props.children}
    </LoadingContext.Provider>
  );
}
