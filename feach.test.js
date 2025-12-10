const getUser = require('./feach');

  beforeAll(() => {
global.fetch = jest.fn(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve({ id: 1, name: 'Вася' })
      });
    }, 1000); // Задержка 1 секунда
  })
);
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });


describe('geting user test', () => {
test('получает пользователя', async () => {

  const user = await getUser(1);

  expect(fetch).toHaveBeenCalledWith('/api/users/1');
  expect(user).toEqual({ id: 1, name: 'Вася' });
});


});