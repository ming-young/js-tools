import { formatSecond } from '../index';

test('formatSecond', () => {
  expect(formatSecond(365 * 24 * 3600, 'year', 0)).toBe('1');
});

test('formatSecond', () => {
  expect(formatSecond(365 * 24 * 3600, 'month', 0)).toBe('12');
});
