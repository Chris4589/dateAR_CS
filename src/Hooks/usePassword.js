import { useState } from "react";

export const usePassword = () => {
  const [password, setPassword] = useState(false);

  const showPassword = () => {
    setPassword(!password);
  }
  return {
    password,
    showPassword,
  }
};
