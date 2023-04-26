import { InputDefault, InputPassword } from "../../../shared/components";
import { UseLoginController } from "../controllers/useLoginControllers";
import {
  BackgroundImage,
  Container,
  ContainerLogin,
  LimitedLogo,
  Logo,
  WrapperForm,
} from "../styles/styles";

const LoginScreen: React.FC = () => {
  const { showPassword, setShowPassword } = UseLoginController();

  return (
    <Container>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <WrapperForm>
          <LimitedLogo>
            <Logo src="./logo.png" />
          </LimitedLogo>
          <InputDefault label="EMAIL" size="large" />
          <InputPassword
            label="SENHA"
            size="large"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </WrapperForm>
      </ContainerLogin>
    </Container>
  );
};

export default LoginScreen;
