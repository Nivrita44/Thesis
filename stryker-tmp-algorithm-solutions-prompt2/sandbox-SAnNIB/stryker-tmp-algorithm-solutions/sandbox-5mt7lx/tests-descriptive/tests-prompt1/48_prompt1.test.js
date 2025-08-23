// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/48.js'

test('example from description', () => {
  expect(solve(4, [3, 2, 3, 4])).toBe(2);
});

test('minimal/lower-bound case, n=1', () => {
  expect(solve(1, [1])).toBe(1);
});

test('edge case: all deadlines are 1', () => {
  expect(solve(5, [1, 1, 1, 1, 1])).toBe(1);
});

test('upper-bound/large input, increasing deadlines', () => {
  const n = 200000;
  const a = Array.from({length: n}, (_, i) => n);
  expect(solve(n, a)).toBe(n);
});

test('tricky/corner case: impossible in the middle', () => {
  expect(solve(5, [5, 2, 1, 2, 5])).toBe(0);
});

test('random valid case', () => {
  expect(solve(6, [2, 3, 4, 4, 3, 2])).toBe(2);
});

test('random case: tight deadlines', () => {
  expect(solve(7, [2, 2, 3, 3, 2, 2, 3])).toBe(1);
});

test('all a[i]=n', () => {
  expect(solve(3, [3, 3, 3])).toBe(3);
});

test('single city, high deadline', () => {
  expect(solve(1, [10])).toBe(1);
});



// × example from description (6 ms)
// √ minimal/lower-bound case, n=1
// × edge case: all deadlines are 1
// √ upper-bound/large input, increasing deadlines (25 ms)
// √ tricky/corner case: impossible in the middle (1 ms)
// × random valid case
// × random case: tight deadlines (1 ms)
// √ all a[i]=n
// √ single city, high deadline