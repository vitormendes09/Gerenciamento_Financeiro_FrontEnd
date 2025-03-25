// features/auth/services/AuthService.ts
import axios from "axios";
import { IAuthCredentials } from "../contracts/IauthCredentials";
import { IAuthResponse } from "../contracts/IauthResponse";
import { IAuthService } from "../contracts/IauthService";


export class AuthService implements IAuthService {
  private readonly API_URL = "http://localhost:3000/auth/login";

  async login(credentials: IAuthCredentials): Promise<IAuthResponse> {
    const response = await axios.get<IAuthResponse>(this.API_URL, {
      params: credentials, // Enviando email e senha como query params
    });

    return response.data;
  }
}
