import { notification as notificationAntd } from "antd";
import { useContext, useEffect } from "react";

import { UseContext } from "./useContext";

export const UseNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification } = useContext(UseContext);

  useEffect(() => {
    if (notification?.message && notification?.type) {
      api[notification.type]({
        message: `${notification?.message}`,
        description: `${notification?.description}`,
        placement: "bottomRight",
      });
    }
  }, [notification]);

  return {
    api,
    contextHolder,
  };
};
