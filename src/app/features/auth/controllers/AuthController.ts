// features/auth/controllers/AuthController.ts
import { useState } from "react";
import { IAuthCredentials } from "../contracts/IauthCredentials";
import { IAuthResponse } from "../contracts/IauthResponse";
import { AuthService } from "../services/AuthService";

export const useAuthController = () => {
  const [credentials, setCredentials] = useState<IAuthCredentials>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const authService = new AuthService();

  const handleChange = (field: keyof IAuthCredentials, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response: IAuthResponse = await authService.login(credentials);
      console.log("Usuário autenticado:", response.token);
    } catch (err) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return {
    credentials,
    handleChange,
    handleLogin,
    error,
    loading,
  };
};
