import { Get } from "../types";

export interface GetCurrentUserRequestProps {}

export interface CurrentUserResponse {
  id: string;
  name: string;
  is_robot: boolean;
  affinity: number;
  profile_picture_url?: string;
  emails?: Array<{
    address: string;
    added_usec: number;
    verified_company_id: string;
    send_notifications?: boolean | null;
  }>;
  desktop_folder_id: string;
  archive_folder_id: string;
  starred_folder_id: string;
  private_folder_id: string;
  trash_folder_id: string;
  group_folder_ids: string[];
  shared_folder_ids: string[];
}

/** @internal */
export const getCurrentUser =
  (get: Get) => (_props: GetCurrentUserRequestProps) => {
    return get<CurrentUserResponse>("1/users/current");
  };
