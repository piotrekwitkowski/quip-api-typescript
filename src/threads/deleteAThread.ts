import { Post } from "../types";

export interface DeleteAThreadRequestProps {
  body: {
    thread_id: string;
  }
}

export interface DeleteAThreadResponse {}

/** @internal */
export const deleteAThread = (post: Post) => (props: DeleteAThreadRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<DeleteAThreadResponse>(`1/threads/delete`, new URLSearchParams(body));
}
