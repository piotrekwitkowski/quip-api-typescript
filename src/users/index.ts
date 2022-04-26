import { Get } from "../types";

import { getUser, GetUserRequestProps, GetUserResponse } from "./getUser";

export class UsersAPI {
  getUser: (props: GetUserRequestProps) => Promise<GetUserResponse>;

  constructor(get: Get) {
    this.getUser = getUser(get);
  }
}
