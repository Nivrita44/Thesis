// @ts-nocheck
import { solve } from '../../solutions-descriptive/30.js';

test('example 1', () => {
  expect(solve(3, [2, 3, 1])).toBe(3);
});

test('example 2', () => {
  expect(solve(5, [2, 3, 4, 5, 1])).toBe(5);
});

test('two cycles', () => {
  expect(solve(4, [2, 1, 4, 3])).toBe(2);
});

test('selfish ring', () => {
  expect(solve(6, [2, 3, 1, 5, 6, 4])).toBe(3);
});

test('cycle lengths LCM', () => {
  expect(solve(6, [2, 3, 1, 5, 6, 4])).toBe(3);
  expect(solve(4, [2, 3, 4, 1])).toBe(4);
});

test('disjoint cycles lcm', () => {
  expect(solve(6, [2, 1, 4, 3, 6, 5])).toBe(2);
});

test('cycle of 2 and 3', () => {
  expect(solve(5, [2, 1, 4, 5, 3])).toBe(6);
});

test('long chain single cycle', () => {
  expect(solve(7, [2, 3, 4, 5, 6, 7, 1])).toBe(7);
});

test('all send to one', () => {
  expect(solve(4, [2, 2, 2, 2])).toBe(2);
});

test('n=2 path', () => {
  expect(solve(2, [2, 1])).toBe(2);
});

test('simple large even n with single cycle', () => {
  let n = 10;
  let arr = [];
  for (let i = 0; i < n - 1; ++i) arr.push(i + 2);
  arr.push(1);
  expect(solve(n, arr)).toBe(10);
});

test('two cycles with different lengths', () => {
  expect(solve(8, [2, 3, 1, 5, 6, 4, 8, 7])).toBe(6);
});




// × example 1 (4 ms)
//   × example 2 (1 ms)
//   √ two cycles
//   × selfish ring (1 ms)
//   × cycle lengths LCM (1 ms)
//   √ disjoint cycles lcm
//   × cycle of 2 and 3
//   × long chain single cycle
//   × all send to one (1 ms)
//   √ n=2 path (1 ms)
//   × simple large even n with single cycle (1 ms)
//   × two cycles with different lengths (1 ms)