import { Get, Post } from "../types";

import { addMembersToThreadOrAddThreadToFolders } from "./addMembersToThreadOrAddThreadToFolders";
import { copyADocumentOrTemplateV2 } from "./copyADocumentOrTemplateV2";
import { createADocumentOrSpreadsheet } from "./createADocumentOrSpreadsheet";
import { editADocument, EditADocumentLocation } from "./editADocument";
import { getThreadHtmlV2 } from "./getThreadHtmlV2";
import { getThreadMembersV2 } from "./getThreadMembersV2";

export const getThreadsMethods = (get: Get, post: Post) => ({
  addMembersToThreadOrAddThreadToFolders: addMembersToThreadOrAddThreadToFolders(post),
  copyADocumentOrTemplateV2: copyADocumentOrTemplateV2(post),
  createADocumentOrSpreadsheet: createADocumentOrSpreadsheet(post),
  editADocument: editADocument(post),
  getThreadHtmlV2: getThreadHtmlV2(get),
  getThreadMembersV2: getThreadMembersV2(get),
});

export interface Thread {
  id: string;
  created_usec: number;
  updated_usec: number;
  thread_class: string;
  owning_company_id: string;
  author_id?: string;
  title?: string;
  is_deleted?: boolean;
  is_template?: boolean;
  document_id?: string;
  link: string;
  type: "document" | "spreadsheet" | "slides" | "chat";
  snippet_user_id: string;
  snippet_message: string;
  sharing: object;
};

export { EditADocumentLocation }