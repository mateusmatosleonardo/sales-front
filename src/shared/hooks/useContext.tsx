import { createContext, useEffect, useState } from "react";

import { AUTORIZATION_KEY } from "../constants/autorization";
import {
  IUseContext,
  NotificationProps,
  UseContextProps,
} from "../interfaces/interfaces";

export const UseContext = createContext<IUseContext>({} as IUseContext);

export const ContextProvider = ({ children }: UseContextProps) => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [notification, setNotification] = useState<NotificationProps>({
    message: "",
    type: "info",
    description: "",
  });

  useEffect(() => {
    const token: string | null = localStorage.getItem(AUTORIZATION_KEY);
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <UseContext.Provider
      value={{
        accessToken,
        setAccessToken,
        notification,
        setNotification,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};
