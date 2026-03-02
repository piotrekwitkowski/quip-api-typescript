import * as auth from ".";

const get = jest.fn();
const post = jest.fn();
const urlBase = "https://platform.quip.com/";

describe("auth file", () => {
  const api = new auth.AuthAPI(get, post, urlBase);
  afterEach(() => {
    get.mockReset();
    post.mockReset();
  });

  it("has callable accessToken method that uses post", () => {
    api.accessToken({ grant_type: "authorization_code", client_id: "", client_secret: "" });
    expect(post).toBeCalledTimes(1);
  });

  it("has callable buildAuthorizationUrl method that returns a string", () => {
    const url = api.buildAuthorizationUrl({ client_id: "cid", client_secret: "cs", redirect_uri: "https://example.com" });
    expect(url).toContain("1/oauth/login");
    expect(url).toContain("client_id=cid");
  });

  it("has callable revokeToken method that uses post", () => {
    api.revokeToken({ client_id: "", client_secret: "", token: "" });
    expect(post).toBeCalledTimes(1);
  });

  it("has callable verifyToken method that uses get", () => {
    api.verifyToken({});
    expect(get).toBeCalledTimes(1);
  });
});
