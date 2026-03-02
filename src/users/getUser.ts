import { Get } from "../types";

export interface GetUserRequestProps {
  id: string;
  sort_by?: string;
  sort_order?: string;
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


/** @internal */
export const getUser = (get: Get) => (props: GetUserRequestProps) => {
  const { id, sort_by, sort_order } = props;
  const params = new URLSearchParams();
  if (sort_by !== undefined) params.set('sort_by', sort_by);
  if (sort_order !== undefined) params.set('sort_order', sort_order);
  const query = params.toString();
  return get<GetUserResponse>(`1/users/${id}${query ? `?${query}` : ''}`);
};
