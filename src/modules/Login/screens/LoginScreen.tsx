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
  WrapperForm,
} from "../styles/styles";

const LoginScreen: React.FC = () => {
  const {
    showPassword,
    setShowPassword,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSignIn,
  } = UseLoginController();

  return (
    <Container>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <WrapperForm>
          <LimitedLogo>
            <Logo src="./logo.png" />
          </LimitedLogo>
          <InputDefault
            label="EMAIL"
            size="large"
            margin="22px 0px 0px 0px"
            value={email}
            onChange={handleChangeEmail}
          />
          <InputPassword
            label="SENHA"
            size="large"
            margin="22px 0px 0px 0px"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            value={password}
            onChange={handleChangePassword}
          />
          <Button
            margin="42px 0px 32px 0px"
            type="primary"
            size="large"
            onClick={() => handleSignIn({ email, password })}
          >
            ENTRAR
          </Button>
        </WrapperForm>
      </ContainerLogin>
    </Container>
  );
};

export default LoginScreen;
