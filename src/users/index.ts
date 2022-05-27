import { Get } from "../types";

import { getUser, GetUserRequestProps, GetUserResponse } from "./getUser";

export class UsersAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getUser) */
  getUser: (props: GetUserRequestProps) => Promise<GetUserResponse>;

  /** @internal */
  constructor(get: Get) {
    this.getUser = getUser(get);
  }
}
