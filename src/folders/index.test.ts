import * as folder from ".";

const get = jest.fn();
const post = jest.fn();
const put = jest.fn();

describe("folder file", () => {
  const api = new folder.FoldersAPI(get, post, put);
  afterEach(() => {
    get.mockReset();
    post.mockReset();
    put.mockReset();
  });

  it("has callable getFolder method that uses get", () => {
    api.getFolder({ id: "" });
    expect(get).toBeCalledTimes(1);
  });

  it("has callable addPeopleToFolder method that uses post", () => {
    api.addPeopleToFolder({ body: { folder_id: "", member_ids: "" } });
    expect(post).toBeCalledTimes(1);
  });

  it("has callable getFolderLinkSharingSettings method that uses get", () => {
    api.getFolderLinkSharingSettings({ id: "" });
    expect(get).toBeCalledTimes(1);
  });

  it("has callable editFolderLinkSharingSettings method that uses put", () => {
    api.editFolderLinkSharingSettings({ id: "" });
    expect(put).toBeCalledTimes(1);
  });

  it("has callable getFolders method that uses get", () => {
    api.getFolders({ ids: "" });
    expect(get).toBeCalledTimes(1);
  });

  it("has callable createAFolder method that uses post", () => {
    api.createAFolder({ body: { title: "" } });
    expect(post).toBeCalledTimes(1);
  });

  it("has callable removePeopleFromFolder method that uses post", () => {
    api.removePeopleFromFolder({ body: { folder_id: "", member_ids: "" } });
    expect(post).toBeCalledTimes(1);
  });

  it("has callable updateAFolder method that uses post", () => {
    api.updateAFolder({ body: { folder_id: "" } });
    expect(post).toBeCalledTimes(1);
  });
});
