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
