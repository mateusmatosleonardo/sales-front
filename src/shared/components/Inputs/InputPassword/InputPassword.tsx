import { Input as InputAntd } from "antd";

import { InputPasswordProps } from "../../../interfaces/interfaces";
import { Label, WrapperInput } from "./styles";

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  margin,
  showPassword,
  setShowPassword,
  ...rest
}: InputPasswordProps) => {
  return (
    <WrapperInput style={{ margin }}>
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
