import { Thread } from ".";
import { Post } from "../types";

export interface CreateLivePasteSectionRequestProps {
  body: {
    thread_id: string;
    source_thread_id: string;
    source_section_id: string;
    destination_section_id?: string;
    location?: string;
  }
}

export interface CreateLivePasteSectionResponse {
  thread: Thread;
  user_ids: string[];
  shared_folder_ids: string[];
  html?: string;
}

/** @internal */
export const createLivePasteSection = (post: Post) => (props: CreateLivePasteSectionRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<CreateLivePasteSectionResponse>(`1/threads/live-paste`, new URLSearchParams(body));
}
