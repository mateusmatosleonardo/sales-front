import { createContext, useState } from "react";

import {
  IUseContext,
  NotificationProps,
  UseContextProps,
} from "../interfaces/interfaces";

export const UseContext = createContext<IUseContext>({} as IUseContext);

export const ContextProvider = ({ children }: UseContextProps) => {
  const [accessToken, setAccessToken] = useState("");
  const [notification, setNotification] = useState<NotificationProps>({
    message: "",
    type: "info",
    description: "",
  });

  return (
    <UseContext.Provider
      value={{ accessToken, setAccessToken, notification, setNotification }}
    >
      {children}
    </UseContext.Provider>
  );
};
