import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../service/api";
import { AUTORIZATION_KEY } from "../../../shared/constants/autorization";
import { UseContext } from "../../../shared/hooks/useContext";
import { ProductRoutesEnum } from "../../Product/routes";
import { UserForm, UserResponse } from "../interfaces/interfaces";

export const UseLoginController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setNotification, setAccessToken } = useContext(UseContext);

  const navigate = useNavigate();

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSignIn(user: UserForm): Promise<void> {
    setLoading(true);
    try {
      const response = await api.post<UserResponse>("/auth", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem(AUTORIZATION_KEY, response?.data.accessToken);
      setAccessToken(response?.data.accessToken);
      setNotification({
        message: "Logado com sucesso",
        type: "success",
        description: "Redirecionando",
      });
      navigate(ProductRoutesEnum.PRODUCT);
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      setNotification({
        message: "Email ou Senha Inválida",
        type: "error",
        description: "Verifique suas credenciais!",
      });
      return;
    }
  }

  return {
    showPassword,
    setShowPassword,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleChangeEmail,
    handleChangePassword,
    handleSignIn,
  };
};
