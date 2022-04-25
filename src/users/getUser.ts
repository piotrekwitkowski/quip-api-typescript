import { Get } from "../types";

export interface GetUserRequestProps {
  id: string;
  // TODO: implement QUERY PARAMETERS
  // sort_by: string;
  // sort_order: string;
}

export interface GetUserResponse {
  id: string;
  name: string;
  is_robot: boolean;
  affinity: number;
  profile_picture_url?: string;
  emails?: Emails[];
}

export interface Emails {
  address: string;
  added_usec: number;
  verified_company_id: string;
  send_notifications?: boolean | null;
}


// https://quip.com/dev/automation/documentation/current#operation/getUser
export const getUser = (get: Get) => (props: GetUserRequestProps) => {
  const { id } = props;
  return get<GetUserResponse>(`1/users/${id}`);
};
