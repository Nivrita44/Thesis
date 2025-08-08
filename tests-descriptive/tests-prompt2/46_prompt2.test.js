import { solve } from '../../solutions-descriptive/46.js';

test('typical case 1', () => {
  expect(solve(2, [5, 6, 7])).toBe(7);
});

test('typical case 2', () => {
  expect(solve(3, [1, 2, 4, 7])).toBe(7);
});

test('size less than k', () => {
  expect(solve(4, [2, 4])).toBe(6);
});

test('all sizes are the same', () => {
  expect(solve(3, [3, 3, 3])).toBe(3);
});

test('largest bit from combining', () => {
  expect(solve(2, [8, 8])).toBe(12);
});

test('k is 1', () => {
  expect(solve(1, [15, 3, 5])).toBe(15);
});

test('sizes contain zeros', () => {
  expect(solve(2, [0, 0, 7])).toBe(7);
});

test('all zero sizes', () => {
  expect(solve(3, [0, 0, 0])).toBe(0);
});

test('large numbers', () => {
  expect(solve(2, [1048575, 131071])).toBe(1179647);
});

test('empty sizes array and k=0', () => {
  expect(solve(0, [])).toBe(0);
});

test('sizes array length less than k', () => {
  expect(solve(5, [1,2,3])).toBe(3);

});

test('sizes is single element', () => {
  expect(solve(1, [17])).toBe(17);
});





  // largest bit from combining

  //     expect(received).toBe(expected) // Object.is equality

  //     Expected: 12
  //     Received: 8

  //       18 |
  //       19 | test('largest bit from combining', () => {
  //     > 20 |   expect(solve(2, [8, 8])).toBe(12);
  //          |                            ^
  //       21 | });
  //       22 |
  //       23 | test('k is 1', () => {

  //       at Object.toBe (tests-descriptive/tests-prompt2/46_prompt2.test.js:20:28)

  //   ● sizes contain zeros

  //     expect(received).toBe(expected) // Object.is equality

  //     Expected: 7
  //     Received: 0

  //       26 |
  //       27 | test('sizes contain zeros', () => {
  //     > 28 |   expect(solve(2, [0, 0, 7])).toBe(7);
  //          |                               ^
  //       29 | });
  //       30 |
  //       31 | test('all zero sizes', () => {

  //       at Object.toBe (tests-descriptive/tests-prompt2/46_prompt2.test.js:28:31)

  //   ● large numbers

  //     expect(received).toBe(expected) // Object.is equality

  //     Expected: 1179647
  //     Received: "Yes
  //     2 1"

  //       34 |
  //       35 | test('large numbers', () => {
  //     > 36 |   expect(solve(2, [1048575, 131071])).toBe(1179647);
  //          |                                       ^
  //       37 | });
  //       38 |
  //       39 | test('empty sizes array and k=0', () => {

  //       at Object.toBe (tests-descriptive/tests-prompt2/46_prompt2.test.js:36:39)

  //   ● empty sizes array and k=0

  //     expect(received).toBe(expected) // Object.is equality

  //     Expected: 0
  //     Received: "No"

  //       38 |
  //       39 | test('empty sizes array and k=0', () => {
  //     > 40 |   expect(solve(0, [])).toBe(0);
  //          |                        ^
  //       41 | });
  //       42 |
  //       43 | test('sizes array length less than k', () => {

  //       at Object.toBe (tests-descriptive/tests-prompt2/46_prompt2.test.js:40:24)
