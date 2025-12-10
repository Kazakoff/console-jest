const math = require('./math');

jest.mock('./math', () => ({
  ...jest.requireActual('./math'),
  multiply: jest.fn(() => 100), // мокаем только multiply
}));

test('multiply мокнут', () => {
  expect(math.multiply(2, 3)).toBe(100);
  expect(math.add(2, 3)).toBe(5); // оригинальная функция
});

