import * as folder from ".";

const get = jest.fn();
// const post = jest.fn();

describe("folder file", () => {
  const api = new folder.FoldersAPI(get);
  afterEach(() => {
    get.mockReset();
    // post.mockReset();
  });

  it("has callable getFolder method that uses get", () => {
    api.getFolder({ id: "" });
    expect(get).toBeCalledTimes(1);
  });
});
