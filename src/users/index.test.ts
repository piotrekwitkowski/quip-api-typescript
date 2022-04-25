import * as users from ".";

const get = jest.fn();
// const post = jest.fn();

describe('users file', () => {
  const api = new users.UsersAPI(get);
  afterEach(() => {
    get.mockReset();
    // post.mockReset();
  });

  it('has callable getUser method that uses get', () => {
    api.getUser({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

});
