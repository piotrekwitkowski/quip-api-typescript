import { Thread } from ".";
import { Post } from "../types";

export interface CreateAChatRoomRequestProps {
  body: {
    title?: string;
    message?: string;
    member_ids: string;
  }
}

export interface CreateAChatRoomResponse {
  thread: Thread;
  user_ids: string[];
  shared_folder_ids: string[];
  expanded_user_ids: string[];
  invited_user_emails: string[];
}

/** @internal */
export const createAChatRoom = (post: Post) => (props: CreateAChatRoomRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<CreateAChatRoomResponse>(`1/threads/new-chat`, new URLSearchParams(body));
}
