import * as messages from ".";

const get = jest.fn();
const post = jest.fn();

describe("messages file", () => {
  const api = new messages.MessagesAPI(get, post);
  afterEach(() => {
    get.mockReset();
    post.mockReset();
  });

  it("has callable getRecentMessages method that uses get", () => {
    api.getRecentMessages({ threadId: "" });
    expect(get).toBeCalledTimes(1);
  });

  it("has callable addAMessage method that uses post", () => {
    api.addAMessage({ body: { thread_id: "", content: "" } });
    expect(post).toBeCalledTimes(1);
  });
});
