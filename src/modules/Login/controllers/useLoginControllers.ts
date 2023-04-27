import { useState } from "react";

import { api } from "../../../service/api";
import { UserForm } from "../interfaces/interfaces";

export const UseLoginController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSignIn(user: UserForm): Promise<void> {
    try {
      const response = await api.post("/auth", {
        email: user.email,
        password: user.password,
      });
      console.log(response?.data);
    } catch (e) {
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
    handleChangeEmail,
    handleChangePassword,
    handleSignIn,
  };
};
