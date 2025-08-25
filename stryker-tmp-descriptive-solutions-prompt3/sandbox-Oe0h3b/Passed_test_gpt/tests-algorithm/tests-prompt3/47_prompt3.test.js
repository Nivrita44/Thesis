import { solve } from '../../../solutions-algorithm/47.js';

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

test('n=2, only one swap needed', () => {
  expect(solve(2, 1, [2, 1])).toBe(1);
});

test('k=1, needs maximum possible swaps (already sorted)', () => {
  expect(solve(7, 1, [1,2,3,4,5,6,7])).toBe(0);
});


test('edge case: n=100000 all sorted', () => {
  const arr = Array.from({length: 100000}, (_, i) => i + 1);
  expect(solve(100000, 2, arr)).toBe(0);
});

test('edge case: n=100000 all reverse, k=100000', () => {
  const arr = Array.from({length: 100000}, (_, i) => 100000 - i);
  expect(solve(100000, 100000, arr)).toBe(1);
});


test('random mid case', () => {
  expect(solve(7, 3, [2, 1, 5, 3, 4, 7, 6])).toBe(2);
});
