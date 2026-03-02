import * as users from ".";

const get = jest.fn();
const post = jest.fn();

describe('users file', () => {
  const api = new users.UsersAPI(get, post);
  afterEach(() => {
    get.mockReset();
    post.mockReset();
  });

  it('has callable getUser method that uses get', () => {
    api.getUser({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getContacts method that uses get', () => {
    api.getContacts({});
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getCurrentUser method that uses get', () => {
    api.getCurrentUser({});
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getCurrentUserThreads method that uses get', () => {
    api.getCurrentUserThreads({});
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getUsers method that uses get', () => {
    api.getUsers({ ids: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable getUsersReadOnly method that uses get', () => {
    api.getUsersReadOnly({ ids: '' });
    expect(get).toBeCalledTimes(1);
  });

  it('has callable updateUser method that uses post', () => {
    api.updateUser({ body: {} });
    expect(post).toBeCalledTimes(1);
  });

});
