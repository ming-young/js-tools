import { formatNumber } from '../index';

test('formatNumber', () => {
  expect(formatNumber(NaN, 2)).toBe('-');
});

test('formatNumber', () => {
  expect(formatNumber(1.3333333, 2)).toBe('1.33');
});

test('formatNumber', () => {
  expect(formatNumber(-1.3333333, 2, false, true)).toBe('1.33');
});
