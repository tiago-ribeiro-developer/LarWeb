import { createContext, ReactNode, useState } from "react";

declare type NOTIFICATION_TYPE =
  | "success"
  | "danger"
  | "info"
  | "default"
  | "warning";

export type ProviderPropsType = { children: ReactNode };
export const AlertContext = createContext({} as AlertContextType);

export type AlertMessageType = {
  show: boolean;
  content: string;
  color: NOTIFICATION_TYPE;
  time?: number;
};
export type AlertContextType = {
  messageAlert: AlertMessageType | undefined;
  showAlert: (data: AlertMessageType) => void;
};

/**
 * AlertProvider
 * @param props
 * @constructor
 */
export function AlertProvider(props: ProviderPropsType) {
  const [messageAlert, updateMessageAlert] = useState<AlertMessageType>();

  function showAlert(data: AlertMessageType) {
    updateMessageAlert(data);
  }

  return (
    <AlertContext.Provider value={{ messageAlert, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
}
