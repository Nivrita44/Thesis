import { solve } from '../../../solutions-algorithm/42.js';

test('simple permutation [3,1,2]', () => {
  expect(solve(3, [3, 1, 2])).toBe(2);
});

test('medium permutation [4,2,1,3,5]', () => {
  expect(solve(5, [4, 2, 1, 3, 5])).toBe(3);
});

test('single element [42]', () => {
  expect(solve(1, [42])).toBe(1);
});

test('random permutation [1,9,8,10,2,3,4,6,5,7]', () => {
  expect(solve(10, [1,9,8,10,2,3,4,6,5,7])).toBe(6);
});

test('already sorted [1,2,3,4,5]', () => {
  expect(solve(5, [1,2,3,4,5])).toBe(5);
});

test('reversed sorted [5,4,3,2,1]', () => {
  expect(solve(5, [5,4,3,2,1])).toBe(1);
});

test('zig-zag permutation [2,1,4,3,6,5]', () => {
  expect(solve(6, [2,1,4,3,6,5])).toBe(3);
});

test('two elements increasing [1,2]', () => {
  expect(solve(2, [1,2])).toBe(2);
});

test('two elements decreasing [2,1]', () => {
  expect(solve(2, [2,1])).toBe(1);
});

test('three elements decreasing [3,2,1]', () => {
  expect(solve(3, [3,2,1])).toBe(1);
});

test('alternating high-low [1, 3, 2, 4, 5]', () => {
  expect(solve(5, [1,3,2,4,5])).toBe(4);
});

test('maximal independent set size 1', () => {
  expect(solve(4, [4,3,2,1])).toBe(1);
});

test('maximal independent set size n', () => {
  expect(solve(7, [1,2,3,4,5,6,7])).toBe(7);
});

test('large input ascending', () => {
  const n = 100000;
  const a = Array.from({length: n}, (_, i) => i + 1);
  expect(solve(n, a)).toBe(n);
});

test('large input descending', () => {
  const n = 100000;
  const a = Array.from({length: n}, (_, i) => n - i);
  expect(solve(n, a)).toBe(1);
});
