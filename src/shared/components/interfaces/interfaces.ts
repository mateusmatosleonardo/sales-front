import { InputProps as InputPropsAntd } from "antd";
export interface InputDefaultProps extends InputPropsAntd {
  label: string;
}

export interface InputPasswordProps extends InputPropsAntd {
  label: string;
  showPassword?: boolean;
  setShowPassword?: (newState: boolean) => void;
}
