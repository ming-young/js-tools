import { verification } from '../index';

test('verification', () => {
  expect(verification.checkDecimal('18500223772')).toBe('success');
});
test('verification', () => {
  expect(verification.checkDecimal('185002.2.3772')).toBe('数字格式有误');
});

test('verification', () => {
  expect(verification.checkInteger('18500223772')).toBe('success');
});
test('verification', () => {
  expect(verification.checkInteger('185002.2.3772')).toBe('数字格式有误');
});

test('verification', () => {
  expect(verification.checkNegative('-18500223772')).toBe('success');
});
test('verification', () => {
  expect(verification.checkNegative('-185002.2.3772')).toBe('数字格式有误');
});

test('verification', () => {
  expect(verification.checkNumber('18500223772')).toBe('success');
});
test('verification', () => {
  expect(verification.checkNumber('185002.2.3772')).toBe('数字格式有误');
});

test('verification', () => {
  expect(verification.checkHttp('http://www.baidu.com')).toBe('success');
});
test('verification', () => {
  expect(verification.checkHttp('http:///www.baidu.com')).toBe('success');
});
