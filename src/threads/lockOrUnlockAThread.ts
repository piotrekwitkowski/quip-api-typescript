import { Post } from "../types";

export interface LockOrUnlockAThreadRequestProps {
  body: {
    thread_id: string;
    locked: string;
  }
}

export interface LockOrUnlockAThreadResponse {}

/** @internal */
export const lockOrUnlockAThread = (post: Post) => (props: LockOrUnlockAThreadRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<LockOrUnlockAThreadResponse>(`1/threads/lock`, new URLSearchParams(body));
}
