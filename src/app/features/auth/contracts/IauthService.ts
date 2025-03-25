import { IAuthCredentials } from "../contracts/IauthCredentials";
import { IAuthResponse } from "../contracts/IauthResponse";

export interface IAuthService {
    login(credentials: IAuthCredentials): Promise<IAuthResponse>;
  }