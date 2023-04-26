import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 646px;
  height: 100vh;
  z-index: 1;
  background-color: #d9d9d9;
`;

export const TitleLogin = styled(Title)`
  color: #006397 !important;
`;

export const WrapperForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

export const LimitedLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`;

export const Logo = styled.img`
  height: 100%;
`;
