import { Get, Post } from "../types";

import { addMembersToThreadOrAddThreadToFolders, AddPeopleToAThreadRequestProps, AddPeopleToAThreadResponse } from "./addMembersToThreadOrAddThreadToFolders";
import { copyADocumentOrTemplateV2, CopyADocumentOrTemplateV2RequestProps, CopyADocumentOrTemplateV2Response } from "./copyADocumentOrTemplateV2";
import { createADocumentOrSpreadsheet, CreateADocumentOrSpreadsheetRequestProps, CreateADocumentOrSpreadsheetResponse } from "./createADocumentOrSpreadsheet";
import { editADocument, EditADocumentLocation, EditADocumentRequestProps, EditADocumentResponse } from "./editADocument";
import { getThreadHtmlV2, GetThreadHtmlV2RequestProps, GetThreadHtmlV2Response } from "./getThreadHtmlV2";
import { getThreadMembersV2, GetThreadMembersV2RequestProps, GetThreadMembersV2Response } from "./getThreadMembersV2";

export class ThreadsAPI {
  addMembersToThreadOrAddThreadToFolders: (props: AddPeopleToAThreadRequestProps) => Promise<AddPeopleToAThreadResponse>;
  copyADocumentOrTemplateV2: (props: CopyADocumentOrTemplateV2RequestProps) => Promise<CopyADocumentOrTemplateV2Response>;
  createADocumentOrSpreadsheet: (props: CreateADocumentOrSpreadsheetRequestProps) => Promise<CreateADocumentOrSpreadsheetResponse>;
  editADocument: (props: EditADocumentRequestProps) => Promise<EditADocumentResponse>;
  getThreadHtmlV2: (props: GetThreadHtmlV2RequestProps) => Promise<GetThreadHtmlV2Response>;
  getThreadMembersV2: (props: GetThreadMembersV2RequestProps) => Promise<GetThreadMembersV2Response>;

  constructor(get: Get, post: Post) {
    this.addMembersToThreadOrAddThreadToFolders = addMembersToThreadOrAddThreadToFolders(post);
    this.copyADocumentOrTemplateV2 = copyADocumentOrTemplateV2(post);
    this.createADocumentOrSpreadsheet = createADocumentOrSpreadsheet(post);
    this.editADocument = editADocument(post);
    this.getThreadHtmlV2 = getThreadHtmlV2(get);
    this.getThreadMembersV2 = getThreadMembersV2(get);
  }
}

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