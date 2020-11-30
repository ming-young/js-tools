import { object2Params } from '../index';

test('object2Params', () => {
  expect(object2Params({ 1: 'ming', age: 18, sex: undefined, asss: null }, false)).toBe('1=ming&age=18');
});
test('object2Params', () => {
  expect(object2Params({ 1: 'ming', age: [1, 2] }, false)).toBe('1=ming&age=1,2');
});
test('object2Params', () => {
  expect(object2Params({ 1: 'ming', age: '1,2' }, false)).toBe('1=ming&age=1,2');
});
