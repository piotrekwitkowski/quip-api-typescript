import { Get } from "../types";

export interface GetContactsRequestProps {}

export interface ContactUser {
  id: string;
  name: string;
  is_robot: boolean;
  affinity: number;
  profile_picture_url?: string;
}

export type GetContactsResponse = ContactUser[];

/** @internal */
export const getContacts = (get: Get) => (_props: GetContactsRequestProps) => {
  return get<GetContactsResponse>("1/users/contacts");
};
