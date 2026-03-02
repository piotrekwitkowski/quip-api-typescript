import * as threads from ".";

const get = jest.fn();
const post = jest.fn();

describe('threads file', () => {
  const api = new threads.ThreadsAPI(get, post);
  afterEach(() => {
    get.mockReset();
    post.mockReset();
  });

  it('has callable addMembersToThreadOrAddThreadToFolders method that uses post', () => {
    api.addMembersToThreadOrAddThreadToFolders({ body: { thread_id: '', member_ids: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable copyADocumentOrTemplateV2 method that uses post', () => {
    api.copyADocumentOrTemplateV2({ threadIdOrSecretPath: '' });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable createADocumentOrSpreadsheet method that uses post', () => {
    api.createADocumentOrSpreadsheet({ body: { content: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable editADocument method that uses post', () => {
    api.editADocument({ body: { thread_id: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable getThreadHtmlV2 method that uses get', () => {
    api.getThreadHtmlV2({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getThreadMembersV2 method that uses get', () => {
    api.getThreadMembersV2({ threadIdOrSecretPath: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getThreadV2 method that uses get', () => {
    api.getThreadV2({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable deleteAThread method that uses post', () => {
    api.deleteAThread({ body: { thread_id: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable editThreadLinkShareSettings method that uses post', () => {
    api.editThreadLinkShareSettings({ id: '' });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable exportDocumentToDocx method that uses get', () => {
    api.exportDocumentToDocx({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable retrieveBulkExportResponse method that uses get', () => {
    api.retrieveBulkExportResponse({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable createBulkExportRequest method that uses post', () => {
    api.createBulkExportRequest({ body: { thread_ids: [] } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable exportSlidesToPdf method that uses get', () => {
    api.exportSlidesToPdf({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable retrieveExportPdfResponse method that uses get', () => {
    api.retrieveExportPdfResponse({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable createExportPdfRequest method that uses post', () => {
    api.createExportPdfRequest({ id: '' });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable exportSpreadsheetToXlsx method that uses get', () => {
    api.exportSpreadsheetToXlsx({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getThreadFoldersV2 method that uses get', () => {
    api.getThreadFoldersV2({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getThreadInvitedMembersV2 method that uses get', () => {
    api.getThreadInvitedMembersV2({ threadIdOrSecretPath: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable lockOrUnlockAThread method that uses post', () => {
    api.lockOrUnlockAThread({ body: { thread_id: '', locked: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable lockOrUnlockASection method that uses post', () => {
    api.lockOrUnlockASection({ body: { thread_id: '', section_id: '', locked: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable createLivePasteSection method that uses post', () => {
    api.createLivePasteSection({ body: { thread_id: '', source_thread_id: '', source_section_id: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable getThreadsV2 method that uses get', () => {
    api.getThreadsV2({ ids: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable createAChatRoom method that uses post', () => {
    api.createAChatRoom({ body: { member_ids: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable getRecentThreads method that uses get', () => {
    api.getRecentThreads({});
    expect(get).toBeCalledTimes(1);
  });

  it('has callable removePeopleFromThread method that uses post', () => {
    api.removePeopleFromThread({ body: { thread_id: '', member_ids: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable searchForThreads method that uses get', () => {
    api.searchForThreads({ query: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getBlobFromThread method that uses get', () => {
    api.getBlobFromThread({ threadId: '', blobId: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable addBlobToThread method that uses post', () => {
    api.addBlobToThread({ threadId: '', blob: '' });
    expect(post).toBeCalledTimes(1);
  });

});
