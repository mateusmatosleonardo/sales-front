import { useState } from "react";

export const UseLoginController = () => {
  const [showPassword, setShowPassword] = useState(false);

  return {
    showPassword,
    setShowPassword,
  };
};
