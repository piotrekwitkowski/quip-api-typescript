import { Post } from "../types";
import { Thread } from ".";

export const enum EditADocumentLocation {
  APPEND = '0',
  PREPEND = '1',
  AFTER_SECTION = '2',
  BEFORE_SECTION = '3',
  REPLACE_SECTION = '4',
  DELETE_SECTION = '5',
  AFTER_DOCUMENT_RANGE = '6',
  BEFORE_DOCUMENT_RANGE = '7',
  REPLACE_DOCUMENT_RANGE = '8',
  DELETE_DOCUMENT_RANGE = '9',
}

export interface EditADocumentRequestProps {
  body: {
    thread_id: string;
    format?: 'html' | 'markdown';
    content?: string;
    section_id?: string;
    documentRange?: string;
    location?: EditADocumentLocation;
  }
}

export interface EditADocumentResponse {
  thread: Thread;
  user_ids: string[];
  shared_folder_ids: string[];
  expanded_user_ids: string[];
  invited_user_emails: string[];
  markdown?: string;
  access_levels?: Record<string, { access_level: string }>;
  html?: string;
  section_ids?: string[];
}

/** @internal */
export const editADocument = (post: Post) => (props: EditADocumentRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;
  return post<EditADocumentResponse>(`1/threads/edit-document`, new URLSearchParams(body));
}
