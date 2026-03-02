import { Get, Post } from "../types";

import { accessToken, AccessTokenRequestProps, AccessTokenResponse } from "./accessToken";
import { buildAuthorizationUrl, AuthorizationRequestProps } from "./authorization";
import { revokeToken, RevokeTokenRequestProps, RevokeTokenResponse } from "./revokeToken";
import { verifyToken, VerifyTokenRequestProps, VerifyTokenResponse } from "./verifyToken";

export class AuthAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/accessToken) */
  accessToken: (props: AccessTokenRequestProps) => Promise<AccessTokenResponse>;

  /** Builds the OAuth authorization URL to redirect users to. Does not make an HTTP request. */
  buildAuthorizationUrl: (props: AuthorizationRequestProps) => string;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/revokeToken) */
  revokeToken: (props: RevokeTokenRequestProps) => Promise<RevokeTokenResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/verifyToken) */
  verifyToken: (props: VerifyTokenRequestProps) => Promise<VerifyTokenResponse>;

  /** @internal */
  constructor(get: Get, post: Post, urlBase: string) {
    this.accessToken = accessToken(post);
    this.buildAuthorizationUrl = buildAuthorizationUrl(urlBase);
    this.revokeToken = revokeToken(post);
    this.verifyToken = verifyToken(get);
  }
}
