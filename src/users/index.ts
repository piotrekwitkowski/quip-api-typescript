import { Get } from "../types";

import { getUser } from "./getUser";

export class UsersAPI {
  getUser;

  constructor(get: Get) {
    this.getUser = getUser(get);
  }
}
