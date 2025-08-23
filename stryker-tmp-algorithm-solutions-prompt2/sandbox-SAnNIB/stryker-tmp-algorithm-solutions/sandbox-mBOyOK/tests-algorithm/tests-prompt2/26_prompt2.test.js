// @ts-nocheck
// 
import { solve } from '../../solutions-algorithm/26.js';

test('Common cases', () => {
  expect(solve([[5, 3], [6, 1], [7, 4], [8, 8]])).toEqual(["yes", "yes", "no", "yes"]);
});

test('Even and odd difference scenarios', () => {
  expect(solve([[10, 2], [3, 2]])).toEqual(["yes", "no"]);
});

test('Large BigInt inputs', () => {
  expect(solve([[1000000000000000000n, 1]])).toEqual(["yes"]);
});

test('Boundary case: minimal values', () => {
  expect(solve([[0, 0], [0, 1], [1, 0]])).toEqual(["yes", "no", "no"]);
});

test('All pairs yield no', () => {
  expect(solve([[1, 2], [3, 4], [9, 5]])).toEqual(["no", "no", "no"]);
});

test('k is larger than n', () => {
  expect(solve([[5, 10], [2, 3]])).toEqual(["no", "no"]);
});

test('Test with mixed BigInt and number (auto-convert)', () => {
  expect(solve([[12n, 6], [9, 2n]])).toEqual(["yes", "no"]);
});

test('Edge: negative inputs (invalid domain)', () => {
  expect(solve([[-2, 1], [2, -1]])).toEqual(["no", "no"]);
});

test('Edge: k = 0 special handling', () => {
  expect(solve([[2, 0], [3, 0], [0, 0]])).toEqual(["yes", "no", "yes"]);
});



// √ Common cases (4 ms)
//   √ Even and odd difference scenarios (1 ms)
//   √ Large BigInt inputs
//   × Boundary case: minimal values (8 ms)
//   × All pairs yield no (1 ms)
//   × k is larger than n (3 ms)
//   √ Test with mixed BigInt and number (auto-convert) (1 ms)
//   × Edge: negative inputs (invalid domain) (1 ms)
//   √ Edge: k = 0 special handling