import { Post } from "../types";

export interface LockOrUnlockASectionRequestProps {
  body: {
    thread_id: string;
    section_id: string;
    locked: string;
  }
}

export interface LockOrUnlockASectionResponse {}

/** @internal */
export const lockOrUnlockASection = (post: Post) => (props: LockOrUnlockASectionRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<LockOrUnlockASectionResponse>(`1/threads/lock-section`, new URLSearchParams(body));
}
