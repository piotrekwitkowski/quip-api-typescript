import { Post } from "../types";

export interface RevokeTokenRequestProps {
  client_id: string;
  client_secret: string;
  token: string;
}

export interface RevokeTokenResponse {}

/** @internal */
export const revokeToken = (post: Post) => (props: RevokeTokenRequestProps) => {
  const params = new URLSearchParams();
  params.set('client_id', props.client_id);
  params.set('client_secret', props.client_secret);
  params.set('token', props.token);
  return post<RevokeTokenResponse>(`1/oauth/revoke`, params);
};
