import { Post } from "../types";
import { Thread } from ".";

export interface AddPeopleToAThreadRequestProps {
  body: {
    thread_id: string;
    member_ids: string;
  }
}

export interface AddPeopleToAThreadResponse {
  thread: Thread;
  user_ids: string[];
  shared_folder_ids: string[];
  expanded_user_ids: string[];
  invited_user_emails: string[];
  access_levels: Record<string, { access_level: string }>;
  html: string;
}

// https://quip.com/dev/automation/documentation/current#operation/addMembersToThreadOrAddThreadToFolders
export const addMembersToThreadOrAddThreadToFolders = (post: Post) => (props: AddPeopleToAThreadRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<AddPeopleToAThreadResponse>(`1/threads/add-members`, new URLSearchParams(body));
}
