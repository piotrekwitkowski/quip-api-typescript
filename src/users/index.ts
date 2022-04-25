import { Get } from "../types";

import { getUser } from "./getUser";

export const getUsersMethods = (get: Get) => ({
  getUser: getUser(get)
});
