import {
  Button,
  InputDefault,
  InputPassword,
} from "../../../shared/components";
import { UseLoginController } from "../controllers/useLoginControllers";
import {
  BackgroundImage,
  Container,
  ContainerLogin,
  LimitedLogo,
  Logo,
  TitleLogin,
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
          <TitleLogin level={4}>ENTRAR</TitleLogin>
          <InputDefault label="EMAIL" size="large" />
          <InputPassword
            label="SENHA"
            size="large"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <Button margin="32px 0px 32px 0px" type="primary" size="large">
            Entrar
          </Button>
        </WrapperForm>
      </ContainerLogin>
    </Container>
  );
};

export default LoginScreen;
