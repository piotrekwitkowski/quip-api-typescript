import { Get } from "../types";

export interface GetUsersReadOnlyRequestProps {
  ids: string;
}

export type GetUsersReadOnlyResponse = Record<string, boolean>;

/** @internal */
export const getUsersReadOnly =
  (get: Get) => (props: GetUsersReadOnlyRequestProps) => {
    const { ids } = props;
    return get<GetUsersReadOnlyResponse>(`2/users/read-only?ids=${ids}`);
  };
