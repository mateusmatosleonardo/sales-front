import { Input as InputAntd } from "antd";

import { InputDefaultProps } from "../../../interfaces/interfaces";
import { Label, WrapperInput } from "./styles";

const InputDefault: React.FC<InputDefaultProps> = ({
  label,
  ...rest
}: InputDefaultProps) => {
  return (
    <WrapperInput>
      {label && <Label>{label}</Label>}
      <InputAntd {...rest} />
    </WrapperInput>
  );
};

export default InputDefault;
