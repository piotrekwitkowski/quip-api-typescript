import { Post } from "../types";

export interface AccessTokenRequestProps {
  grant_type: 'refresh_token' | 'authorization_code';
  client_id: string;
  client_secret: string;
  refresh_token?: string;
  code?: string;
  redirect_uri?: string;
}

export interface AccessTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: 'Bearer';
}

/** @internal */
export const accessToken = (post: Post) => (props: AccessTokenRequestProps) => {
  const params = new URLSearchParams();
  params.set('grant_type', props.grant_type);
  params.set('client_id', props.client_id);
  params.set('client_secret', props.client_secret);
  if (props.refresh_token !== undefined) params.set('refresh_token', props.refresh_token);
  if (props.code !== undefined) params.set('code', props.code);
  if (props.redirect_uri !== undefined) params.set('redirect_uri', props.redirect_uri);
  return post<AccessTokenResponse>(`1/oauth/access_token`, params);
};
