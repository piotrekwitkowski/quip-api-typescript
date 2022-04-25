import { Post } from "../types";

export interface createADocumentOrSpreadsheetRequestProps {
  body: {
    content: string;
    format?: 'html' | 'markdown';
    title?: string;
    member_ids?: string;
    type?: 'document' | 'spreadsheet' | 'slides';
  }
}

// https://quip.com/dev/automation/documentation/current#operation/createDocument
export const createADocumentOrSpreadsheet = (post: Post) => (props: createADocumentOrSpreadsheetRequestProps) => {
  // REQUEST BODY SCHEMA: application/x-www-form-urlencoded
  const { body } = props;

  return post(`1/threads/new-document`, new URLSearchParams(body));
}