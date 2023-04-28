import { useContext, useState } from "react";

import { api } from "../../../service/api";
import { UseContext } from "../../../shared/hooks/useContext";
import { UserForm } from "../interfaces/interfaces";

export const UseLoginController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setNotification } = useContext(UseContext);

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSignIn(user: UserForm): Promise<void> {
    setLoading(true);
    try {
      const response = await api.post("/auth", {
        email: user.email,
        password: user.password,
      });
      console.log(response?.data);
      setNotification({
        message: "Logado com sucesso :)",
        type: "success",
        description: "Redirecionando",
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setNotification({
        message: "Email ou Senha Inválida",
        type: "error",
        description: "Verifique suas credenciais!",
      });
      console.log(e);
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
