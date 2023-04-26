import { Input as InputAntd } from "antd";

import { InputPasswordProps } from "../../../interfaces/interfaces";
import { Label, WrapperInput } from "./styles";

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  showPassword,
  setShowPassword,
  ...rest
}: InputPasswordProps) => {
  return (
    <WrapperInput>
      {label && <Label>{label}</Label>}
      <InputAntd.Password
        {...rest}
        visibilityToggle={{
          visible: showPassword,
          onVisibleChange: setShowPassword,
        }}
      />
    </WrapperInput>
  );
};

export default InputPassword;
