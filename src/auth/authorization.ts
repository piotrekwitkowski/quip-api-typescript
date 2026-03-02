import { Get } from "../types";

export interface AuthorizationRequestProps {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  state?: number;
}

/**
 * Returns the authorization URL to redirect users to.
 * This is a helper that builds the URL — it does not make an HTTP request.
 */
export const buildAuthorizationUrl = (urlBase: string) => (props: AuthorizationRequestProps): string => {
  const params = new URLSearchParams();
  params.set('client_id', props.client_id);
  params.set('client_secret', props.client_secret);
  params.set('redirect_uri', props.redirect_uri);
  if (props.state !== undefined) params.set('state', String(props.state));
  return `${urlBase}1/oauth/login?${params.toString()}`;
};
