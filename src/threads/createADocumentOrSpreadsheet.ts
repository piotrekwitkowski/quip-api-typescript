import { Thread } from ".";
import { Post } from "../types";

export interface CreateADocumentOrSpreadsheetRequestProps {
  body: {
    content: string;
    format?: 'html' | 'markdown';
    title?: string;
    member_ids?: string;
    type?: 'document' | 'spreadsheet' | 'slides';
  }
}

export interface CreateADocumentOrSpreadsheetResponse {
  thread: Thread,
  user_ids: string[],
  shared_folder_ids: string[],
  expanded_user_ids: string[],
  invited_user_emails: string[],
  markdown?: string;
  access_levels?: object,
  html?: string
}

// https://quip.com/dev/automation/documentation/current#operation/createDocument
export const createADocumentOrSpreadsheet = (post: Post) => (props: CreateADocumentOrSpreadsheetRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;

  return post<CreateADocumentOrSpreadsheetResponse>(`1/threads/new-document`, new URLSearchParams(body));
}