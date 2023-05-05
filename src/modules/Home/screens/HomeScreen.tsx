import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AUTORIZATION_KEY } from "../../../shared/constants/autorization";
import { LoginRoutesEnum } from "../../Login/routes";
import { ProductRoutesEnum } from "../../Product/routes";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(AUTORIZATION_KEY);
    if (token) {
      navigate(ProductRoutesEnum.PRODUCT);
    } else {
      navigate(LoginRoutesEnum.LOGIN);
    }
  }, []);

  return <Spin />;
};

export default HomeScreen;
