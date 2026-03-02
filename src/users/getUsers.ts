import { Get } from "../types";

export interface GetUsersRequestProps {
  ids: string;
}

export interface UserInfo {
  id: string;
  name: string;
  is_robot: boolean;
  affinity: number;
  profile_picture_url?: string;
}

export type GetUsersResponse = Record<string, UserInfo>;

/** @internal */
export const getUsers = (get: Get) => (props: GetUsersRequestProps) => {
  const { ids } = props;
  return get<GetUsersResponse>(`2/users?ids=${ids}`);
};
