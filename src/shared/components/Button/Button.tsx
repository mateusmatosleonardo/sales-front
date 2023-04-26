import { ButtonCurrentProps } from "../../interfaces/interfaces";
import { ButtonAntd } from "./styles";

const Button: React.FC<ButtonCurrentProps> = ({
  margin,
  ...rest
}: ButtonCurrentProps) => {
  return <ButtonAntd style={{ margin }} {...rest} />;
};

export default Button;
