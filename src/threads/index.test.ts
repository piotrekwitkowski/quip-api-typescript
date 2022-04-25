import * as threads from ".";

const get = jest.fn();
const post = jest.fn();

describe('threads file', () => {
  const methods = threads.getThreadsMethods(get, post);
  afterEach(() => {
    get.mockReset();
    post.mockReset();
  });

  it('has callable addMembersToThreadOrAddThreadToFolders method that uses post', () => {
    methods.addMembersToThreadOrAddThreadToFolders({ body: { thread_id: '', member_ids: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable copyADocumentOrTemplateV2 method that uses post', () => {
    methods.copyADocumentOrTemplateV2({ threadIdOrSecretPath: '' });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable createADocumentOrSpreadsheet method that uses post', () => {
    methods.createADocumentOrSpreadsheet({ body: { content: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable editADocument method that uses post', () => {
    methods.editADocument({ body: { thread_id: '' } });
    expect(post).toBeCalledTimes(1);
  });

  it('has callable getThreadHtmlV2 method that uses get', () => {
    methods.getThreadHtmlV2({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getThreadMembersV2 method that uses get', () => {
    methods.getThreadMembersV2({ threadIdOrSecretPath: '' });
    expect(get).toBeCalledTimes(1);
  });

});
