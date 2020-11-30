import { formatPhone } from '../index';

test('firstUpper', () => {
  expect(formatPhone('18500223772')).toBe('185 0022 3772');
});
