import * as users from ".";

const get = jest.fn();
// const post = jest.fn();

describe('users file', () => {
  const methods = users.getUsersMethods(get);
  afterEach(() => {
    get.mockReset();
    // post.mockReset();
  });

  it('has callable getUser method that uses get', () => {
    methods.getUser({ id: '' });
    expect(get).toBeCalledTimes(1);
  });

});
