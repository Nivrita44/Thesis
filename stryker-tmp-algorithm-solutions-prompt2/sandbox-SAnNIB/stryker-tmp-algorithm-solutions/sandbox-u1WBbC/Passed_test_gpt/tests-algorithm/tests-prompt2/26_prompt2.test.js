// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/26.js';

test('Common cases', () => {
  expect(solve([[5, 3], [6, 1], [7, 4], [8, 8]])).toEqual(["yes", "yes", "no", "yes"]);
});

test('Even and odd difference scenarios', () => {
  expect(solve([[10, 2], [3, 2]])).toEqual(["yes", "no"]);
});

test('Large BigInt inputs', () => {
  expect(solve([[1000000000000000000n, 1]])).toEqual(["yes"]);
});

test('Test with mixed BigInt and number (auto-convert)', () => {
  expect(solve([[12n, 6], [9, 2n]])).toEqual(["yes", "no"]);
});


test('Edge: k = 0 special handling', () => {
  expect(solve([[2, 0], [3, 0], [0, 0]])).toEqual(["yes", "no", "yes"]);
});
