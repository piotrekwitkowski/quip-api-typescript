import * as realtime from ".";

const get = jest.fn();

describe("realtime file", () => {
  const api = new realtime.RealtimeAPI(get);
  afterEach(() => {
    get.mockReset();
  });

  it("has callable newWebsocket method that uses get", () => {
    api.newWebsocket({});
    expect(get).toBeCalledTimes(1);
  });
});
