import { Get } from "../types";

export interface VerifyTokenRequestProps {}

export interface VerifyTokenResponse {
  expires_in: number;
  scope: string;
  token_type: 'Bearer';
  client_id: string;
  api_key_expires_in: number;
}

/** @internal */
export const verifyToken = (get: Get) => (_props: VerifyTokenRequestProps) => {
  return get<VerifyTokenResponse>(`1/oauth/verify_token`);
};
