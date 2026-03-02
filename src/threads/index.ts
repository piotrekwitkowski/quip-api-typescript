import { Get, Post } from "../types";

import { addMembersToThreadOrAddThreadToFolders, AddPeopleToAThreadRequestProps, AddPeopleToAThreadResponse } from "./addMembersToThreadOrAddThreadToFolders";
import { copyADocumentOrTemplateV2, CopyADocumentOrTemplateV2RequestProps, CopyADocumentOrTemplateV2Response } from "./copyADocumentOrTemplateV2";
import { createADocumentOrSpreadsheet, CreateADocumentOrSpreadsheetRequestProps, CreateADocumentOrSpreadsheetResponse } from "./createADocumentOrSpreadsheet";
import { editADocument, EditADocumentLocation, EditADocumentRequestProps, EditADocumentResponse } from "./editADocument";
import { getThreadHtmlV2, GetThreadHtmlV2RequestProps, GetThreadHtmlV2Response } from "./getThreadHtmlV2";
import { getThreadMembersV2, GetThreadMembersV2RequestProps, GetThreadMembersV2Response } from "./getThreadMembersV2";
import { getThreadV2, GetThreadV2RequestProps, GetThreadV2Response } from "./getThreadV2";
import { deleteAThread, DeleteAThreadRequestProps, DeleteAThreadResponse } from "./deleteAThread";
import { editThreadLinkShareSettings, EditThreadLinkShareSettingsRequestProps, EditThreadLinkShareSettingsResponse } from "./editThreadLinkShareSettings";
import { exportDocumentToDocx, ExportDocumentToDocxRequestProps, ExportDocumentToDocxResponse } from "./exportDocumentToDocx";
import { retrieveBulkExportResponse, RetrieveBulkExportResponseRequestProps, RetrieveBulkExportResponseResponse } from "./retrieveBulkExportResponse";
import { createBulkExportRequest, CreateBulkExportRequestRequestProps, CreateBulkExportRequestResponse } from "./createBulkExportRequest";
import { exportSlidesToPdf, ExportSlidesToPdfRequestProps, ExportSlidesToPdfResponse } from "./exportSlidesToPdf";
import { retrieveExportPdfResponse, RetrieveExportPdfResponseRequestProps, RetrieveExportPdfResponseResponse } from "./retrieveExportPdfResponse";
import { createExportPdfRequest, CreateExportPdfRequestRequestProps, CreateExportPdfRequestResponse } from "./createExportPdfRequest";
import { exportSpreadsheetToXlsx, ExportSpreadsheetToXlsxRequestProps, ExportSpreadsheetToXlsxResponse } from "./exportSpreadsheetToXlsx";
import { getThreadFoldersV2, GetThreadFoldersV2RequestProps, GetThreadFoldersV2Response } from "./getThreadFoldersV2";
import { getThreadInvitedMembersV2, GetThreadInvitedMembersV2RequestProps, GetThreadInvitedMembersV2Response } from "./getThreadInvitedMembersV2";
import { lockOrUnlockAThread, LockOrUnlockAThreadRequestProps, LockOrUnlockAThreadResponse } from "./lockOrUnlockAThread";
import { lockOrUnlockASection, LockOrUnlockASectionRequestProps, LockOrUnlockASectionResponse } from "./lockOrUnlockASection";
import { createLivePasteSection, CreateLivePasteSectionRequestProps, CreateLivePasteSectionResponse } from "./createLivePasteSection";
import { getThreadsV2, GetThreadsV2RequestProps, GetThreadsV2Response } from "./getThreadsV2";
import { createAChatRoom, CreateAChatRoomRequestProps, CreateAChatRoomResponse } from "./createAChatRoom";
import { getRecentThreads, GetRecentThreadsRequestProps, GetRecentThreadsResponse } from "./getRecentThreads";
import { removePeopleFromThread, RemovePeopleFromThreadRequestProps, RemovePeopleFromThreadResponse } from "./removePeopleFromThread";
import { searchForThreads, SearchForThreadsRequestProps, SearchForThreadsResponse } from "./searchForThreads";
import { getBlobFromThread, GetBlobFromThreadRequestProps, GetBlobFromThreadResponse } from "./getBlobFromThread";
import { addBlobToThread, AddBlobToThreadRequestProps, AddBlobToThreadResponse } from "./addBlobToThread";

export class ThreadsAPI {
  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/addMembersToThreadOrAddThreadToFolders) */
  addMembersToThreadOrAddThreadToFolders: (props: AddPeopleToAThreadRequestProps) => Promise<AddPeopleToAThreadResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/copyDocumentV2) */
  copyADocumentOrTemplateV2: (props: CopyADocumentOrTemplateV2RequestProps) => Promise<CopyADocumentOrTemplateV2Response>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/createDocument) */
  createADocumentOrSpreadsheet: (props: CreateADocumentOrSpreadsheetRequestProps) => Promise<CreateADocumentOrSpreadsheetResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/editDocument) */
  editADocument: (props: EditADocumentRequestProps) => Promise<EditADocumentResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getThreadHtmlV2) */
  getThreadHtmlV2: (props: GetThreadHtmlV2RequestProps) => Promise<GetThreadHtmlV2Response>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getThreadMembersV2) */
  getThreadMembersV2: (props: GetThreadMembersV2RequestProps) => Promise<GetThreadMembersV2Response>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getThreadV2) */
  getThreadV2: (props: GetThreadV2RequestProps) => Promise<GetThreadV2Response>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/deleteThread) */
  deleteAThread: (props: DeleteAThreadRequestProps) => Promise<DeleteAThreadResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/editThreadLinkShareSettings) */
  editThreadLinkShareSettings: (props: EditThreadLinkShareSettingsRequestProps) => Promise<EditThreadLinkShareSettingsResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/exportDocumentToDocx) */
  exportDocumentToDocx: (props: ExportDocumentToDocxRequestProps) => Promise<ExportDocumentToDocxResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/retrieveBulkExportResponse) */
  retrieveBulkExportResponse: (props: RetrieveBulkExportResponseRequestProps) => Promise<RetrieveBulkExportResponseResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/createBulkExportRequest) */
  createBulkExportRequest: (props: CreateBulkExportRequestRequestProps) => Promise<CreateBulkExportRequestResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/exportSlidesToPdf) */
  exportSlidesToPdf: (props: ExportSlidesToPdfRequestProps) => Promise<ExportSlidesToPdfResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/retrieveExportPdfResponse) */
  retrieveExportPdfResponse: (props: RetrieveExportPdfResponseRequestProps) => Promise<RetrieveExportPdfResponseResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/createExportThreadToPdfRequest) */
  createExportPdfRequest: (props: CreateExportPdfRequestRequestProps) => Promise<CreateExportPdfRequestResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/exportSpreadsheetToXlsx) */
  exportSpreadsheetToXlsx: (props: ExportSpreadsheetToXlsxRequestProps) => Promise<ExportSpreadsheetToXlsxResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getThreadFoldersV2) */
  getThreadFoldersV2: (props: GetThreadFoldersV2RequestProps) => Promise<GetThreadFoldersV2Response>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getThreadInvitedMembersV2) */
  getThreadInvitedMembersV2: (props: GetThreadInvitedMembersV2RequestProps) => Promise<GetThreadInvitedMembersV2Response>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/lockThread) */
  lockOrUnlockAThread: (props: LockOrUnlockAThreadRequestProps) => Promise<LockOrUnlockAThreadResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/lockSection) */
  lockOrUnlockASection: (props: LockOrUnlockASectionRequestProps) => Promise<LockOrUnlockASectionResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/createLivePasteSection) */
  createLivePasteSection: (props: CreateLivePasteSectionRequestProps) => Promise<CreateLivePasteSectionResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getThreadsV2) */
  getThreadsV2: (props: GetThreadsV2RequestProps) => Promise<GetThreadsV2Response>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/createChatRoom) */
  createAChatRoom: (props: CreateAChatRoomRequestProps) => Promise<CreateAChatRoomResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getRecentThreads) */
  getRecentThreads: (props: GetRecentThreadsRequestProps) => Promise<GetRecentThreadsResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/removeMembersFromThread) */
  removePeopleFromThread: (props: RemovePeopleFromThreadRequestProps) => Promise<RemovePeopleFromThreadResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/searchThreads) */
  searchForThreads: (props: SearchForThreadsRequestProps) => Promise<SearchForThreadsResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/getBlob) */
  getBlobFromThread: (props: GetBlobFromThreadRequestProps) => Promise<GetBlobFromThreadResponse>;

  /** [Quip API Reference](https://quip.com/dev/automation/documentation/current#operation/putBlob) */
  addBlobToThread: (props: AddBlobToThreadRequestProps) => Promise<AddBlobToThreadResponse>;

  /** @internal */
  constructor(get: Get, post: Post) {
    this.addMembersToThreadOrAddThreadToFolders = addMembersToThreadOrAddThreadToFolders(post);
    this.copyADocumentOrTemplateV2 = copyADocumentOrTemplateV2(post);
    this.createADocumentOrSpreadsheet = createADocumentOrSpreadsheet(post);
    this.editADocument = editADocument(post);
    this.getThreadHtmlV2 = getThreadHtmlV2(get);
    this.getThreadMembersV2 = getThreadMembersV2(get);
    this.getThreadV2 = getThreadV2(get);
    this.deleteAThread = deleteAThread(post);
    this.editThreadLinkShareSettings = editThreadLinkShareSettings(post);
    this.exportDocumentToDocx = exportDocumentToDocx(get);
    this.retrieveBulkExportResponse = retrieveBulkExportResponse(get);
    this.createBulkExportRequest = createBulkExportRequest(post);
    this.exportSlidesToPdf = exportSlidesToPdf(get);
    this.retrieveExportPdfResponse = retrieveExportPdfResponse(get);
    this.createExportPdfRequest = createExportPdfRequest(post);
    this.exportSpreadsheetToXlsx = exportSpreadsheetToXlsx(get);
    this.getThreadFoldersV2 = getThreadFoldersV2(get);
    this.getThreadInvitedMembersV2 = getThreadInvitedMembersV2(get);
    this.lockOrUnlockAThread = lockOrUnlockAThread(post);
    this.lockOrUnlockASection = lockOrUnlockASection(post);
    this.createLivePasteSection = createLivePasteSection(post);
    this.getThreadsV2 = getThreadsV2(get);
    this.createAChatRoom = createAChatRoom(post);
    this.getRecentThreads = getRecentThreads(get);
    this.removePeopleFromThread = removePeopleFromThread(post);
    this.searchForThreads = searchForThreads(get);
    this.getBlobFromThread = getBlobFromThread(get);
    this.addBlobToThread = addBlobToThread(post);
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
