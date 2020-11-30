import { has } from '../index';

test('has', () => {
  expect(has([1, 2, 3], 1)).toBe(true);
});

// test('has', () => {
//   expect(has({'zhang':'zhang','ming':'ming'}, 'zhang' , 'zhang')).toBe(true);
// });
// test('has', () => {
//   expect(has({'zhang':'zhang','ming':'ming'}, ['zhang', 'yang'] , 'ming')).toBe(false);
// });
