import { solve } from '../../solutions-algorithm/47.js';

test('already sorted permutation (n=3, k=2)', () => {
  expect(solve(3, 2, [1, 2, 3])).toBe(0);
});

test('single move needed with k=1 (n=3)', () => {
  expect(solve(3, 1, [3, 1, 2])).toBe(1);
});

test('simple out-of-order (n=4, k=2, swap in middle)', () => {
  expect(solve(4, 2, [1, 3, 2, 4])).toBe(1);
});

test('requires two steps (n=4, k=2)', () => {
  expect(solve(4, 2, [2, 3, 1, 4])).toBe(2);
});

test('all reversed, k=1 (n=5)', () => {
  expect(solve(5, 1, [5, 4, 3, 2, 1])).toBe(4);
});

test('all reversed, k=n', () => {
  expect(solve(6, 6, [6, 5, 4, 3, 2, 1])).toBe(1);
});

test('single step for two misplaced at end', () => {
  expect(solve(5, 2, [1, 2, 5, 3, 4])).toBe(2);
});

test('n=2, only one swap needed', () => {
  expect(solve(2, 1, [2, 1])).toBe(1);
});

test('k=1, needs maximum possible swaps (already sorted)', () => {
  expect(solve(7, 1, [1,2,3,4,5,6,7])).toBe(0);
});

test('k=3, three chunks out of place', () => {
  expect(solve(6, 3, [4, 5, 6, 1, 2, 3])).toBe(2);
});

test('edge case: n=100000 all sorted', () => {
  const arr = Array.from({length: 100000}, (_, i) => i + 1);
  expect(solve(100000, 2, arr)).toBe(0);
});

test('edge case: n=100000 all reverse, k=100000', () => {
  const arr = Array.from({length: 100000}, (_, i) => 100000 - i);
  expect(solve(100000, 100000, arr)).toBe(1);
});

test('edge case: n=10, k=5, two blocks swapped', () => {
  expect(solve(10, 5, [6,7,8,9,10,1,2,3,4,5])).toBe(2);
});

test('random mid case', () => {
  expect(solve(7, 3, [2, 1, 5, 3, 4, 7, 6])).toBe(2);
});




// single step for two misplaced at end

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 1

//       26 |
//       27 | test('single step for two misplaced at end', () => {
//     > 28 |   expect(solve(5, 2, [1, 2, 5, 3, 4])).toBe(2);
//          |                                        ^
//       29 | });
//       30 |
//       31 | test('n=2, only one swap needed', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/47_prompt3.test.js:28:40)

//   ● k=3, three chunks out of place

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 1

//       38 |
//       39 | test('k=3, three chunks out of place', () => {
//     > 40 |   expect(solve(6, 3, [4, 5, 6, 1, 2, 3])).toBe(2);
//          |                                           ^
//       41 | });
//       42 |
//       43 | test('edge case: n=100000 all sorted', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/47_prompt3.test.js:40:43)

//   ● edge case: n=10, k=5, two blocks swapped

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 1

//       52 |
//       53 | test('edge case: n=10, k=5, two blocks swapped', () => {
//     > 54 |   expect(solve(10, 5, [6,7,8,9,10,1,2,3,4,5])).toBe(2);
//          |                                                ^
//       55 | });
//       56 |
//       57 | test('random mid case', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/47_prompt3.test.js:54:48)