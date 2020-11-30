import { headZero } from '../index';

test('headZero', () => {
  expect(headZero(111, 10)).toBe('0000000111');
});
test('headZero', () => {
  expect(headZero(111.1, 6)).toBe('0111.1');
});
