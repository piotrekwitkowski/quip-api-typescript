import { Get, Post } from "../types";

import { getUser, GetUserRequestProps, GetUserResponse } from "./getUser";
import { getContacts, GetContactsRequestProps, GetContactsResponse } from "./getContacts";
import { getCurrentUser, GetCurrentUserRequestProps, CurrentUserResponse } from "./getCurrentUser";
import { getCurrentUserThreads, GetCurrentUserThreadsRequestProps, GetCurrentUserThreadsResponse } from "./getCurrentUserThreads";
import { getUsers, GetUsersRequestProps, GetUsersResponse } from "./getUsers";
import { getUsersReadOnly, GetUsersReadOnlyRequestProps, GetUsersReadOnlyResponse } from "./getUsersReadOnly";
import { updateUser, UpdateUserRequestProps, UpdateUserResponse } from "./updateUser";

export class UsersAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getUser) */
  getUser: (props: GetUserRequestProps) => Promise<GetUserResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getContacts) */
  getContacts: (props: GetContactsRequestProps) => Promise<GetContactsResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getCurrentUser) */
  getCurrentUser: (props: GetCurrentUserRequestProps) => Promise<CurrentUserResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getCurrentUserThreads) */
  getCurrentUserThreads: (props: GetCurrentUserThreadsRequestProps) => Promise<GetCurrentUserThreadsResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getUsers) */
  getUsers: (props: GetUsersRequestProps) => Promise<GetUsersResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getUsersReadOnly) */
  getUsersReadOnly: (props: GetUsersReadOnlyRequestProps) => Promise<GetUsersReadOnlyResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/updateUser) */
  updateUser: (props: UpdateUserRequestProps) => Promise<UpdateUserResponse>;

  /** @internal */
  constructor(get: Get, post: Post) {
    this.getUser = getUser(get);
    this.getContacts = getContacts(get);
    this.getCurrentUser = getCurrentUser(get);
    this.getCurrentUserThreads = getCurrentUserThreads(get);
    this.getUsers = getUsers(get);
    this.getUsersReadOnly = getUsersReadOnly(get);
    this.updateUser = updateUser(post);
  }
}
