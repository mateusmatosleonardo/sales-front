import { ButtonProps, InputProps as InputPropsAntd } from "antd";
export interface InputDefaultProps extends InputPropsAntd {
  label?: string;
  margin?: string;
}

export interface InputPasswordProps extends InputPropsAntd {
  label?: string;
  margin?: string;
  showPassword?: boolean;
  setShowPassword?: (newState: boolean) => void;
}

export interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

export interface NotificationProps {
  message: string;
  type: "success" | "info" | "warning" | "error";
  description: string;
}

export interface IUseContext {
  accessToken?: string;
  setAccessToken: (newState: string) => void;
  notification?: NotificationProps;
  setNotification: (newState: NotificationProps) => void | null;
}

export interface UseContextProps {
  children: React.ReactNode;
}
