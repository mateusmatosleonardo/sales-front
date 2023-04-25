import React from "react";

import {
  BackgroundImage,
  Container,
  ContainerLogin,
  LimitedLogo,
  Logo,
  WrapperForm,
} from "../styles/styles";

const LoginScreen: React.FC = () => {
  return (
    <Container>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <WrapperForm>
          <LimitedLogo>
            <Logo src="./logo.png" />
          </LimitedLogo>
        </WrapperForm>
      </ContainerLogin>
    </Container>
  );
};

export default LoginScreen;
