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

});
