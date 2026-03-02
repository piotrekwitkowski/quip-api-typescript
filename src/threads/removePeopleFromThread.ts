import { Post } from "../types";

export interface RemovePeopleFromThreadRequestProps {
  body: {
    thread_id: string;
    member_ids: string;
  }
}

export interface RemovePeopleFromThreadResponse {}

/** @internal */
export const removePeopleFromThread = (post: Post) => (props: RemovePeopleFromThreadRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<RemovePeopleFromThreadResponse>(`1/threads/remove-members`, new URLSearchParams(body));
}
