import { isEmpty } from '../index';

test('isEmpty', () => {
  expect(isEmpty('111')).toBe(false);
});

test('isEmpty', () => {
  expect(isEmpty([])).toBe(true);
});

test('isEmpty', () => {
  expect(isEmpty({})).toBe(true);
});

test('isEmpty', () => {
  expect(isEmpty({})).toBe(true);
});
